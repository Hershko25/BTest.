import React, { useState,useContext } from 'react';
import styled from 'styled-components';
import HeaderBack from '../assets/HeaderBack';
import { Index } from '../JSON/IndexJson';
import Dr2 from '../Image/Dr2.png'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import Button from '../assets/Button';
import {useNavigate} from 'react-router-dom';
import {head} from '../Context/Store';


const Main = styled.main`

height: 100vh;


& .index-list{
    height: 70vh;
    text-align: center;
    padding-top: 50px;
    box-sizing: border-box;

    & input{
        width: 70%;
        background-color: transparent;
        border:none;
        border-bottom: solid #00cec8 1px ;
        font-size: 16px;
        padding: 10px 15px;
        font-family: 'Heebo', sans-serif;
        outline: none;
        color: white;
      &::placeholder {
			color: white;
            text-align: right;
		}
    }
}

& .list-index{
    width: 85%;
    height: 250px;
    background: rgba(255, 255, 255, 0.06);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin: auto;
    margin-top: 25px;
    overflow:auto;
}

& ul{
     
    margin: auto;
    margin-top: 25px;
    padding: 25px;
    color: white;
    padding-top: 5px;

    
    & li{
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}


& .img-div{
   height: 20vh;
   display: flex;
   justify-content: flex-end;
   align-items: flex-end;
}


& .list-selected{
    border-top: solid white 1px;
}


`;


export default function ManualReportPage() {


    const [autocomplete, setautocomplete] = useState();
    const [selectedIndex, setselectedIndex] = useState([]);
    const UserReport=useContext(head);
    const navigate=useNavigate();

    const jsonfilter = (e) => {

        if (e.target.value === '') {
            setautocomplete();
            return
        }
        let temp = Index.filter((per) => per.name.toLowerCase().includes(e.target.value.toLocaleLowerCase()));
        setautocomplete(temp);

    }

    const seleted_Index_By_User = (value) => {
        let existingItem = false;
        if (selectedIndex !== undefined) {
            existingItem = selectedIndex.find((per) => per.key === value.key);
        }
        if (existingItem) {
            let temp = selectedIndex.filter((per) => per.key !== value.key)
            setselectedIndex(temp);
            console.log(temp)
        }
        else {
            let temp = selectedIndex;
            temp.push({ name: value.name, key: value.key })
            setselectedIndex(temp);
            console.log(temp)
        }
        setautocomplete();
    }

    const setuserReport=()=>{

        UserReport.manualReport(selectedIndex);
        navigate('/SetManualReportPage');
      
    }

    return (
        <Main>
            <HeaderBack />
            <div className='index-list'>
                <h3 style={{ color: 'white' }}>חפש ובחר ערכים מהרשימה</h3>
                <input type='text' placeholder='חפש' onChange={jsonfilter} />
                <div className='list-index'>
                    {
                        autocomplete !== undefined ?
                            <ul>
                                {
                                    autocomplete.map((per, key) =>
                                        <li key={key} onClick={() => seleted_Index_By_User(per, key)} >
                                            <p>{per.name}</p>
                                            <AddCircleOutlineOutlinedIcon />
                                        </li>
                                    )
                                }
                            </ul> :
                            <p style={{ color: 'white' }}>חפש מדדים</p>
                    }
                    {
                        selectedIndex.length > 0 &&
                        <ul className='list-selected'>
                            <li><p style={{ margin: 'auto' }}>מדדים נבחרים</p></li>
                            {
                                selectedIndex.map((per, key) =>
                                    <li key={key} onClick={() => seleted_Index_By_User(per, key)} >
                                        <p>{per.name}</p>
                                        <HighlightOffOutlinedIcon />
                                    </li>
                                )
                            }
                        </ul>
                    }
                </div>
            </div>
            <div className='img-div'>
                {
                    selectedIndex.length > 0 && <div style={{height:'70%',width:'40%',display:'flex',justifyContent:'center',alignItems:'center'}}><Button  onClick={setuserReport}>המשך</Button></div>
                }
                <img src={Dr2} alt='Dr' style={{ width: '60%' }} />
            </div>
        </Main>
    )
}
