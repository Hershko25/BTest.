import React, { useEffect, useState,useContext } from 'react';
import styled from 'styled-components';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import { head } from '../Context/Store';


const Main = styled.div`


border-right: solid ${props => props.color} 2px;
width: 90%;
border-radius: 25px;
margin: auto;
text-align: right;
direction: rtl;
color: white;
box-sizing: border-box;
padding: 15px;
background: rgba(255, 255, 255, 0.06);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
margin-top: 15px;
margin-bottom: 15px;
font-size: 14px;

& .bmi{
    display: flex;
    width: 100%;
    Bmi.Height: 25px;
    text-align: center;
    direction: ltr;
    margin-top: 15px;
    align-items: center;


    & .blue{
     background-color:#0066AD ;
     border-radius: 15px 0px 0px 15px;
     width: 20%;
     padding-left: 10px;
     padding-right: 5px;
     font-size: 12px;
    }
    & .green{
        background-color: #94AD4A;
        width: 30%;
        font-size: 12px;
    }
    & .yellow{
        background-color: #F4A754;
        width: 30%;
        font-size: 12px;
    }
    & .red{
        background-color: #F25353;
        border-radius: 15px;
        width: 20%;
        border-radius: 0px 15px 15px 0px;
        font-size: 12px;
    }
}

& .arrow-container{
    width: 100%;
    Bmi.Height: 15px;
    box-sizing: border-box;
    padding-left: ${props => props.width};
    text-align: left;
}


`;

export default function Bmi() {

    const json=useContext(head);
    const Bmi=json.UserJson
    const [color, setcolor] = useState('#2c2f36');
    const [width, setwidth] = useState('0%');
    useEffect(() => {
        let bmi = Bmi.Weight / (Bmi.Height * Bmi.Height);
        if (bmi >= 18.5 && bmi <= 25) {
            setcolor('#94AD4A');
            setwidth('35%')
        }
        else if (bmi < 18.5 && bmi < 25) {
            setcolor('#0066AD');
            setwidth('10%')
        }
        else if (bmi > 25 && bmi < 30) {
            setcolor('#F4A754');
            setwidth('65%')
        }
        else if (bmi > 30) {
            setcolor('#F25353');
            setwidth('90%')
        }
    }, [])
    return (
        <Main color={color} width={width}>
            <p>"מדד מסת הגוף" (Body Mass Index) - הוא המדד העולמי המקובל לקביעת עודף משקל או תת־משקל. החישוב של ה־BMI הוא המשקל שלך (בק"ג) חלקי הגובה שלך בריבוע (במטרים).</p>
            <p>מדד ה BMI שלך הינו - {Math.trunc(Bmi.Weight / (Bmi.Height * Bmi.Height))}</p>
            <div className='arrow-container'>
                    <ArrowDropDownSharpIcon fontSize={'large'} />
            </div>
            <div className='bmi'>
                <div className='blue'>תת משקל</div>
                <div className='green'>משקל תקין</div>
                <div className='yellow'>גבולי</div>
                <div className='red'>השמנה</div>
            </div>
        </Main>
    )
}
