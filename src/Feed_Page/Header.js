import React,{useContext} from 'react';
import styled from 'styled-components';
import Btest from '../assets/Btest';
import Button from '../assets/Button';
import { head } from '../Context/Store';


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

    const logout_user=useContext(head);


   const logout=()=>{
    localStorage.clear();
    logout_user.setIsLogin(false);
   }

    return (
        <Main>
            <Btest />
            <Button onClick={logout}>יציאה</Button>
        </Main>
    )
}
