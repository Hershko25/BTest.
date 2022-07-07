import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HeaderBack from '../../assets/HeaderBack';
import NavBar from '../NavBar';
import { head } from '../../Context/Store';




const Main = styled.main`
display: flex;
align-items: center;
flex-direction: column;
width: 100%;
height: 100vh;
text-align: right;



& .box-index{
    direction: rtl;
    width: 90%;
    height: 450px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.06);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    margin-top: 25px;
    padding: 15px;
    box-sizing: border-box;
    border-right: ${props => props.border} solid 2px;
    overflow-y: scroll;


    & .title{

      padding-right: 15px;

        & h4{
             text-align: right;
            }
    }

    & .norm{
      width: 80%;
      margin: auto;
      height: 20px;
      border-bottom: solid #0d9da1 2px;
      border-left: solid #0d9da1 2px;
      border-right: solid #0d9da1 2px;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      padding:0px 5px;

      & label{
        
        font-size: 12px;

      }
    }

}

& .container{
  height: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  & h4{
       text-decoration: underline;
  }
}


`;

export default function FullIndex() {

  const { state } = useLocation();
  const [border, setborder] = useState('green');
  const UserInfo = useContext(head);



  let q = [{
    q1: 'האם אתה מעשן',
    aq1: UserInfo.UserJson.aa.q1.trim(),
    q2: 'האם אתה סובל ממחלת מוח העצם',
    aq2: UserInfo.UserJson.aa.q2.trim(),
    q3: 'האם אתה מטופל בכימותרפיה',
    aq3: UserInfo.UserJson.aa.q3.trim(),
    q4: 'האם אתה סובל ממחלת כבד כרונית',
    aq4: UserInfo.UserJson.aa.q4.trim(),
    q5: 'האם קיים רקע של צליאק',
    aq5: UserInfo.UserJson.aa.q5.trim(),
    q6: 'האם אתה חולה סכרת',
    aq6: UserInfo.UserJson.aa.q6.trim(),
    q7: 'האם אתה סובל מתת תזונה',
    aq7: UserInfo.UserJson.aa.q7.trim(),
    q8: 'האם אתה סובל מעודף משקל',
    aq8: UserInfo.UserJson.aa.q8.trim(),
    q9: 'האם אתה סובל מבעיה קלקתיית במעי',
    aq9: UserInfo.UserJson.aa.q9.trim(),
    q10: 'האם אתה צורך אלכוהול לעיתים קרובות (מעל 3 פעמים בשבוע)',
    aq10: UserInfo.UserJson.aa.q10.trim(),
    q11: 'האם אתה סובל מבעיות לב',
    aq11: UserInfo.UserJson.aa.q11.trim(),
    q12: 'האם אתה חולה בלוקמיה',
    aq12: UserInfo.UserJson.aa.q12.trim(),
    q13: ' האם אתה חולה HIV',
    aq13: UserInfo.UserJson.aa.q13.trim(),
    q14: 'האם את בהריון',
    aq14: UserInfo.UserJson.aa.q14.trim(),
  }];

  useEffect(() => {
    if (state.index.IndexStatus === 'Above' || state.index.IndexStatus === 'Below') {
      setborder('red')
    }
  }, [])

  return (
    <Main border={border} >
      <HeaderBack />
      <div className='container'>
        <div className='box-index'>
          <div className='title'>
            <h4>{state.index.Index_Name_He} - {state.index.Index_Name_En}</h4>
            <p>{state.index.The_purpose_of_the_test}</p>
            <h4> התוצאה שלך למדד זה הינה {state.index.index_Value}</h4>
            <div className='norm'>
              <label>{state.index.Index_Max_Number}</label>
              <label>{state.index.Index_Min_Number}</label>
            </div>
            <h6 style={{ textAlign: 'center' }}>טווח הנורמה</h6>
            {state.index.IndexStatus === 'Below' ? <><p >נראה כי זוהי תוצאות שנמצאת מתחת לטווח הנורמה </p></> : ''}
            {state.index.IndexStatus === 'Above' ? <><h4 >נראה כי זוהי תוצאות שנמצאת מעל לטווח הנורמה</h4> </> : ''}
            {state.index.IndexStatus === 'Fine' ? ` נראה כי תוצאות בדיקה זו נמצאת בטווח הנורמה והינה ${state.index.index_Value}.` : ''}
            {state.index.IndexStatus === 'Below' ? <><h4 >מה המשמעות של תוצאה מתחת לנורמה?</h4> <p>{state.index.Index_Explanation_below_norm}</p></> : ''}
            {state.index.IndexStatus === 'Above' ? <><h4 >מה המשמעות של תוצאה מעל לנורמה?</h4> <p>{state.index.Index_Explanation_above_norm}</p></> : ''}
            
            {
              state.index.Recommend !== null && <p>{state.index.Recommend}</p>
            }
            {
              state.index.Foods !==null && <> <h4>מזונות מומלצים לשיפור המדד</h4> <p>{state.index.Foods}</p></>
            }
          </div>
          {UserInfo.UserJson.Cors.map((per_cors, key) => {
            if (per_cors.Index_Number === state.index.Index_Number) {

              return (
                <div key={key}>
                  <h4 >  נראה שנשאלת {q[0][per_cors.Q_number.trim()]}</h4>
                  <p>
                    {
                      q[0]['a' + per_cors.Q_number.trim()] === 'y' ? 'השבת בחיוב ' : " השבת בשלילה "
                    }
                    על שאלה זו, עלי פי מידע של משתמשים אחרים במערכת נראה כי נמצא קשר בין תשובתך לתוצאות המדד יש לפנות לרופא המשפחה להמשך טיפול
                  </p>
                </div>
              )
            }

          })}
        </div>
      </div>
      <NavBar />
    </Main>
  )
}
