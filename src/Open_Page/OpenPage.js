import React from 'react'
import Header from './Header'
import Logo from '../Image/Logo.png';
import styled from 'styled-components';
import Btn from '../assets/Button';
import { useNavigate } from 'react-router-dom';




const Main = styled.main`

  height: 100vh;
  

  & .Hero-Section{
    height: 80%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    padding-top: 35px;

    & p{
        text-align: center;
        font-size: 28px;
        padding-right: 2px;
        border-right: .10em solid #05bab8;
        animation:blink-caret .75s step-end infinite;
        color: white;
        @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: #05bab8; }
        }
    }

    & img{
      width: 300px;
      height: 300px;
      margin-bottom: 135px;
    }
    }
`;

export default function OpenPage() {

  const navigate=useNavigate();

  return (
    <Main>
      <Header path='/' LinkTitle='התחברות' />
      <div className='Hero-Section'>
        <p>BTest Know Yourself.</p>
        <img src={Logo} alt='Btest' />
          <Btn onClick={()=>navigate('/signin')}>בוא נתחיל</Btn>
      </div>
    </Main>
  )
}
