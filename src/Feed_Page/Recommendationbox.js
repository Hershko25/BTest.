import React from 'react';
import styled from 'styled-components';

const Main=styled.main`

position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
z-index: 999;
background: rgba(0, 0, 0, 0.5);
backdrop-filter: blur(10px);
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

& .Card{
background: rgba(255, 255, 255, 0.06);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid #05bab8 ;
animation: fadein 0.5s;
width: 70%;
padding: 25px;
text-align: right;
color: white;
font-size: 16px;

& h1{
  text-decoration: underline;
  text-align: center;
}

& p{
  direction: rtl;
  font-size: 14px;
}
}


`;

export default function Recommendationbox({recommendation,setshowrecommendation}) {
  return (
    
    <Main onClick={()=>setshowrecommendation()}>
     <div className='Card'>
       <h1>טיפ יומי</h1>
       <p>{recommendation}</p>
     </div>
    </Main>
  )
}
