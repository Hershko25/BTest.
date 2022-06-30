import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../assets/Button';
import Logo from '../assets/Btest';
const Main = styled.header`

   height: 10vh;
   width: 100%;
   box-sizing: border-box;
   padding: 15px 25px;
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
   border-bottom: 1px solid #00cec8;
   
`;

export default function HeaderBack() {

    const navigate = useNavigate();


    return (
        <Main>
            <Logo />
            < Button onClick={()=>navigate(-1)} >חזרה</Button>
        </Main>
    )
}
