import React, { useEffect, useState,useContext } from 'react';
import styled from 'styled-components';
import { QuestionnaireUser } from '../JSON/QuestionnaireUser';
import HeaderBack from '../assets/HeaderBack';
import Dr3 from '../Image/Dr3.png';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import Button from '../assets/Button';
import { useNavigate } from 'react-router';
import {head} from '../Context/Store';

const Main = styled.main`

height: 100vh;

h4{
    color: white;
    text-align: center;
}

& .list-question{

    & ul{
        list-style-type: none;
        direction: rtl;
        padding-right: 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        & li{
            width: 90%;
            height: 130px;
            border-radius: 15px;
            background-color: transparent;
            border:solid #00cec8 1px ;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            margin-bottom: 15px;
            color: white;
            transition:all ease-in-out 0.3s;
            text-align: center;
            box-sizing: border-box;
            padding-top: 3px;
            font-size:14px;

            &:hover{
                transform: scale(1.05);
                border: solid #4062d2  1px;
            }   
            [type=radio] {
                width: 25px;
                height:25px;
                border: #00cec8 solid 1px;
                color: dodgerblue;
                vertical-align: middle;
                -webkit-appearance: none;
                border-radius: 50%; 
                transition: all ease-in-out 0.1s;
            }

            [type=radio]:checked {
                background-color:#4062d2 ;
                border: #4062d2 solid 1px;
                padding: 5px;
                border:solid #00cec8 1px ;
            } 

            & .input-list{
                margin: auto;
                width: 50%;
                display: flex;
                justify-content: space-between;
                
            }

            & .yes-no{
                display:flex;
                flex-direction: column;
                align-items: center;
            }
        }
        & .weight_height{
                margin: auto;
                background-color: transparent;
                border: none;
                border-bottom: solid 2px #00cec8;
                outline: none;
                transition: all ease-in-out 0.3s;
                font-family: 'Heebo', sans-serif;
                color: white;

                &:focus{
                    transform: scale(1.1);
                    border-bottom: solid #4062d2  1px;
                }
                &::placeholder {
                    color: white;
                }     
        }
    }}`;

export default function HealthquestionnairePage() {

    const [questiones, setquestiones] = useState([{
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
        q7: '',
        q8: '',
        q9: '',
        q10: '',
        q11: '',
        q12: '',
        q13: '',
        q14: '',
        Gender: '',
        Height: '',
        Weight: ''
    }]);
    const [IsFull, setIsFull] = useState(false);
    const navigate = useNavigate();
    const User=useContext(head);


    useEffect(() => {
        let check = true;
        for (const x in questiones[0]) {

            if (questiones[0][x] === '') {

                check = false;
            }

        }
        if (check) {
            setIsFull(true);
        }
    }, [questiones])




    const save_ans = (ans, key) => {
        if (key === 'Gender' || key === 'Height' || key === 'Weight') {

            let temp = questiones;
            temp[0][key] = ans;
            console.log(temp);
            setquestiones(temp);

            return;
        }

        let temp = questiones;
        temp[0]['q' + key] = ans;
        console.log(temp);
        setquestiones(temp);


    }

    const submit = () => {
       User.setquestion(questiones);
       navigate('/fetch');
    }


    return (
        <Main>
            <HeaderBack />
            <div className='list-question'>
                <h4>לפענוח מדוייק השב לשאלות</h4>
                <ul>
                    <li>
                        <div className='input-list'>
                            <div className='yes-no'>
                                <label>זכר</label>
                                <ManIcon style={{ marginBottom: 10 }} />
                                <input type='radio' name='Gender' onChange={() => save_ans('M', 'Gender')} />
                            </div>
                            <div className='yes-no'>
                                <label>נקבה</label>
                                <WomanIcon style={{ marginBottom: 10 }} />
                                <input type='radio' name='Gender' onChange={() => save_ans('F', 'Gender')} />
                            </div>
                        </div>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <label>משקל</label>
                        <input className='weight_height' placeholder='הכנס את המשקל שלך' type='number' onChange={(e) => save_ans(e.target.value, 'Weight')} />
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <label>גובה</label>
                        <input className='weight_height' placeholder='הכנס את הגובה שלך' type='number' onChange={(e) => save_ans(e.target.value, 'Height')} />
                    </li>
                    {
                        QuestionnaireUser.map((per, key) =>
                            <li key={key}>
                                <p>{per.Q}</p>
                                <div className='input-list'>
                                    <div className='yes-no'>
                                        <label>כן</label>
                                        <input type='radio' name={key} onChange={() => save_ans('y', key + 1)} />
                                    </div>
                                    <div className='yes-no'>
                                        <label>לא</label>
                                        <input type='radio' name={key} onChange={() => save_ans('n', key + 1)} />
                                    </div>
                                </div>
                            </li>
                        )}
                </ul>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0px 10px', boxSizing: 'border-box' }}>
                    {
                        !IsFull && <Button onClick={submit}>סיום</Button>
                    }
                    <img src={Dr3} alt='dr' style={{ width: '50%' }} />
                </div>
            </div>
        </Main>
    )
}




