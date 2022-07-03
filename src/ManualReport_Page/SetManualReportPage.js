import React, { useContext, useState } from 'react';
import { head } from '../Context/Store';
import styled from 'styled-components';
import HeaderBack from '../assets/HeaderBack';
import Button from '../assets/Button';
import Dr4 from '../Image/Dr4.png';
import { useNavigate } from 'react-router-dom';

const Main = styled.main`

height: 100vh;


& .container{
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}


& h4{
    color: white;
    text-align: center;
}

& .list-index{

    list-style-type: none;
    color: white;
    padding-left: 0px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    margin-top: 35px;



    & .child-list{
        height: 100px;
        width: 100%;
        margin-bottom: 25px;
        background: rgba(255, 255, 255, 0.06);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 25px;
        border-radius:15px ;
        border: solid 1px #00cec8;
        transition: all ease-in-out 0.3s;
        box-sizing: border-box;

        &:hover{
            border: solid 1px #4062d2 ;
            transform: scale(1.05);
        }

        & input{
          background-color: transparent;
          border: #00cec8 solid 1px;
          outline: none;
          padding: 5px;
          width: 70%;
          height: 25px;
          border-radius: 25px;
          text-align: right;
          padding:15px;
          font-family: 'Heebo', sans-serif;
          transition: all ease-in-out 0.3s;
          color: white;
          box-sizing: border-box;

          &:focus{
            transform: scale(1.1);
          }
          &::placeholder {
            color: gray;
          }
          &:hover{
            border: solid 1px #4062d2 ;
            transform: scale(1.05);
        }
        }
    }

}


& .end{
    height: 15%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0px 20px 0px 0px;
}

`;

export default function SetManualReportPage() {


    const User_Index = useContext(head);
    const [Index_Value_Array, setIndex_Value_Array] = useState([]);
    const navigate = useNavigate();

    const setIndexValue = (event) => {

        const existingItem = Index_Value_Array.find((per) => per.Index_Number === event.target.id);
        if (existingItem !== undefined) {
            let temp = Index_Value_Array.filter((per) => per.Index_Number !== event.target.id);
            if (event.target.value !== '') {
                temp.push({ Index_Number: event.target.id, Value: event.target.value });
                console.log(temp);

            }
            setIndex_Value_Array(temp);
        }

        else {
            let temp = Index_Value_Array;
            temp.push({ Index_Number: event.target.id, Value: event.target.value });
            console.log(temp);
            setIndex_Value_Array(temp);
        }
    }

    const setContextArray = () => {

        if (User_Index.IsUser && !User_Index.New_Report) {
            User_Index.manualReport(Index_Value_Array);
            navigate('/Healthquestionnaire')
        }
        else if (User_Index.New_Report) {
            User_Index.setAnonymousUsermanualReport(Index_Value_Array);
            navigate('/newreport');
        }
        else {
            User_Index.setAnonymousUsermanualReport(Index_Value_Array);
            navigate('/AnonymousUser')
        }


    }


    return (
        <Main>
            <HeaderBack />
            <div className='container'>
                <h4>הזן את הערכים של המדדים שנבחרו</h4>
                <ul className='list-index'>
                    {
                        User_Index.UserInfo.UserIndexs.map((per, key) =>
                            <li className='child-list' key={key}><p style={{ marginRight: 15 }}>{per.name}</p>
                                <input type='number' id={per.key} placeholder='% הזן את הערך ללא ' onChange={setIndexValue} />
                            </li>
                        )
                    }
                </ul>
                <div className='end'>
                    <img src={Dr4} alt='dr' style={{ height: '100%', width: '40%' }} />
                    {
                        Index_Value_Array.length === User_Index.UserInfo.UserIndexs.length &&
                        <Button onClick={setContextArray}>המשך</Button>
                    }
                </div>
            </div>
        </Main>
    )
}



// Index_Number: e.target.id, Value: e.target.value

//manualReport