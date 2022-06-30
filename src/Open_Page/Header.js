import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../assets/Button';

const HeaderLogin = styled.header`

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 0px 25px;
  border-bottom:#00cec8 1px solid ;

& .logo{
  font-family: 'Righteous', cursive;
  color:#436ae6 ;
  font-size:42px ;
  margin:0;
}

& .login{
  border:solid #158bbd 2px;
  margin-right: 15px;
  font-size: 14px;
  color: white;
  text-decoration: none;
  padding: 10px 25px;
  border-radius: 25px;

  &:hover{
    background-color: #158bbd;
  }
}

`;

export default function Header({ LinkTitle, path }) {

  const navigate = useNavigate();


  return (
    <HeaderLogin >
      <div onClick={() => navigate('/')}>
        <p className='logo'>BTest</p>
      </div>
    <Button onClick={()=>navigate('/login')}>התחברות</Button>
    </HeaderLogin>
  )
}
