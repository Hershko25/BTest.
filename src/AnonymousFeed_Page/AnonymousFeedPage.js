import React,{useContext} from 'react';
import styled from 'styled-components';
import Btest from '../assets/Btest';
import { head } from '../Context/Store';



const Main = styled.main`

& header{
    padding: 15px;
}
`;


const Box = styled.div`

width: 90%;
    background: rgba(255, 255, 255, 0.06);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin: auto;
    border-radius: 15px;
    border-right: ${props => props.color === 'Above' || props.color === 'Below' ? 'red' : 'green'} solid 2px;
    color: white;
    font-size: 14px;
    text-align: right;
    box-sizing: border-box;
    padding-right: 15px;
    direction: rtl;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 25px;
    padding-left: 10px;
    padding: 15px;


`;

export default function AnonymousFeedPage() {


  const UserInfo=useContext(head);


  return (
    <Main>
      <header><Btest /></header>
      <div className='index-list'>
        {
          UserInfo.UserInfo.Indexs.map((per, key) =>
            <Box className='child-list' key={key} color={per.IndexStatus}>
              <div className='title'>{per.Index_Name_He} - {per.Index_Name_En}</div>
              <p>{per.The_purpose_of_the_test} </p>
                {per.IndexStatus === 'Below' ? <><h4 style={{ textDecoration: 'underline' }}>מה המשמעות של תוצאה מתחת לנורמה?</h4> <p>{per.Index_Explanation_below_norm}</p></> : ''}
                {per.IndexStatus === 'Above' ? <><h4 style={{ textDecoration: 'underline' }}>מה המשמעות של תוצאה מעל לנורמה?</h4> <p>{per.Index_Explanation_above_norm}</p></> : ''}
                {per.IndexStatus === 'Fine' ? "נראה כי תוצאות בדיקה זו נמצאת בטווח הנורמה." : ''}
            </Box>
          )
        }
      </div>
    </Main>
  )
}


///fixxxxx