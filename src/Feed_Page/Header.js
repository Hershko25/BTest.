import React from 'react';
import styled from 'styled-components';
import Btest from '../assets/Btest';
import Button from '../assets/Button';


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

export default function Header() {
    return (
        <Main>
            <Btest />
            <Button>יציאה</Button>
        </Main>
    )
}
