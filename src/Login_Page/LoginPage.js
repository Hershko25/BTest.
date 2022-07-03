import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Button from '../assets/Button';
import HeaderBack from '../assets/HeaderBack';
import { useNavigate } from 'react-router-dom';
import Btest from '../assets/Btest';
import Dr4 from '../Image/Dr4.png';
import { head } from '../Context/Store';


const Main = styled.main`

  height: 100vh;

 & .login{
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;


      & form{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: solid 1px #00cec8;
        box-sizing: border-box;
        height: 350px;
        width: 350px;
        border-radius: 15px;

        & input{
          background-color: transparent;
          border: #00cec8 solid 1px;
          outline: none;
          padding: 5px;
          width: 80%;
          height: 35px;
          border-radius: 25px;
          text-align: right;
          margin-bottom: 25px;
          padding:20px 15px;
          font-family: 'Heebo', sans-serif;
          transition: all ease-in-out 0.3s;
          color: white;
          box-sizing: border-box;

          &:focus{
            transform: scale(1.1);
          }
          &::placeholder {
            color: white;
          }
        }
      }
 }

 & .img-footer{
  height: 40%;
  display: flex;
  align-items: flex-end;
 }


`;

export default function LoginPage() {

  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [IsValid, setIsValid] = useState(false);
  const navigate = useNavigate();
  const UserInfo=useContext(head);

  async function login(event) {
    event.preventDefault();
    if (Email === undefined || Password === undefined) {
      setIsValid(true)
    }
    else {
      try {
        const response = await fetch(`http://localhost:60311/api/RegiUser/${Email}/${Password}`);
        const data = await response.json();
        if (response.Message === 'Wrong password') {
          setIsValid(true)
        }
        else {
          console.log(data);
          localStorage.setItem('json', data)
          UserInfo.setIsLogin(true);
          navigate('/feed')
        }

      } catch {
        console.log('error')
        setIsValid(true)
      }
    }
  }


  return (
    <Main>
      <HeaderBack />
      <div className='login'>
        {
          IsValid &&
          <p className='error'>המייל או הסיסמה שגויים</p>
        }
        <form className='form' onSubmit={login}>
          <Btest />
          <input type='text' style={{ marginTop: '35px' }} placeholder='אימייל' onChange={(e) => setEmail(e.target.value)} />
          <input type='password' placeholder='סיסמה' onChange={(e) => setPassword(e.target.value)} />
          <Button >התחברות</Button>
        </form>
      </div>
      <div className='img-footer'>
        <img src={Dr4} alt='dr' style={{ width: '70%', height: '80%' }} />
      </div>
    </Main>
  )
}
