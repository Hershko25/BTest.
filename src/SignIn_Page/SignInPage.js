import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Dr from '../Image/Dr.png';
import Button from '../assets/Button';
import HeaderBack from '../assets/HeaderBack';
import { head } from '../Context/Store';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const Main = styled.main`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;

  & .no-user{
    color: white;
    margin:0px;
  }

  & .form{
     display: flex;
     flex-direction: column;
     align-items: center;
     width: 90%;
     border-radius: 25px;
     box-sizing: border-box;
     background-color: transparent;
     border:solid #00cec8 1px ;
     padding:  55px 25px 25px 25px;
     box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
     box-sizing: border-box;

    & label{
      text-align: center;
      color: white;
      font-size: 12px;
      margin-bottom: 35px;
    }

    & input{
      color: white;
      text-align: right;
      width: 100%;
      margin-bottom: 25px;
      border: solid #00cec8 1px;
      background: transparent;
      outline: none;
      transition: all ease-in-out 0.3s;
      font-size: 14px;
      padding: 10px 15px;
      box-sizing: border-box;
      border-radius: 25px;
      font-family: 'Heebo', sans-serif;

      &:focus{
        transform: scale(1.1);
      }
      &::placeholder {
			color: white;
		}
    }
  }

`;
export default function SignInPage() {


  const [Full_Name, setFull_Name] = useState();
  const [Email, setEmail] = useState();
  const [Birthday, setBirthday] = useState();
  const [PassWord, setPassWord] = useState();
  const [IsValid, setIsValid] = useState();
  const [loader, setloader] = useState(false);
  const User = useContext(head);
  const [date, setdate] = useState(false);
  const navigate = useNavigate();

  const ValidInfo = (e) => {
    e.preventDefault();
    let checker = false;
    if (Full_Name === undefined || Email === undefined || Birthday === undefined || PassWord === undefined) {
      setIsValid('אחד או יותר מהפרטים חסר');
      return;
    }
    else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) {
        setIsValid('מייל לא תקין');
        checker = true;
      }
      else if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9])/.test(PassWord)) {
        if (checker) {
          setIsValid('מייל לא תקין וסיסמה חלשה');
          return;
        }
        else {
          setIsValid('סיסמה חלשה');
          return;
        }
      }
    }
    Isvalidmail();
  }

  async function Isvalidmail() {
    setloader(true);
    try {
      const response = await fetch(`https://proj.ruppin.ac.il/bgroup87/prod/api/regiuser/mailcheck/${Email}`);
      const data = await response.json();
      if (data !== "User not exist") {
        setIsValid('מייל קיים במערכת')
        setloader(false);
      }
      else {
        User.setUserProfile(Full_Name, Email, Birthday, PassWord);
        navigate('/scanner')

      }
    } catch {
      console.log('error')
    }
  }


  const nouser=()=>{
      User.setIsUser(false);
      navigate('/scanner')
  }

  return (
    <Main>
      <HeaderBack />
      {
        IsValid && <label style={{ color: 'red' }}>{IsValid}</label>
      }
      <form className='form' onSubmit={ValidInfo}>
        <label>שנייה לפני שנמשיך, הרשם וקבל פענוח מותאם אישית</label>
        <input type='text' placeholder='שם מלא' onChange={(e) => setFull_Name(e.target.value)} />
        <input type='email' placeholder='מייל' onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='סיסמה' onChange={(e) => setPassWord(e.target.value)} />
        <input type={date  ? 'date' : 'text'} placeholder="תאריך לידה" onFocus={()=>setdate(true)} onChange={(e) => setBirthday(e.target.value)}></input>
        {
          !loader ? <Button>המשך</Button> :<div><p style={{color:'white'}}>מתחבר</p><br/><CircularProgress/></div>
        }
      </form>
      <p onClick={nouser} className='no-user'>אני מעדיף לא להרשם</p>
      <img src={Dr} alt='Btest' style={{ width: '63%', height: '28%', marginRight: 'auto' }} />
    </Main>
  )
}
