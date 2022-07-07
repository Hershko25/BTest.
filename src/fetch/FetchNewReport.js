import React, { useContext, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';
import Btest from '../assets/Btest';
import { head } from '../Context/Store';
import { useNavigate } from 'react-router-dom';


const Main = styled.main`

  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;


`;
//fix admin//fix
export default function FetchNewReport() {

    const navigate=useNavigate();

    const UserInfo = useContext(head);
    const apiurl = `https://proj.ruppin.ac.il/bgroup87/prod/api/RegiUser/${UserInfo.UserJson.User}`;
    const settings = {
        method: 'POST',
        body: JSON.stringify(UserInfo.AnonymousUser),
        headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json; charset=UTF-8',
        })
      };
 

    useEffect(() => {
        fetch(apiurl,settings)
        .then((res)=>{
             return res.json();
        }).then((resJson)=>{
            UserInfo.setUserInfo(JSON.parse(resJson))
            localStorage.clear();
            localStorage.setItem('json', resJson)
            navigate('/feed')
        })
            .catch(()=>console.log('error'))
    }, [])


    return (
        <Main>
            <Btest />
            <h1>מבצע פענוח</h1>
            <CircularProgress />
        </Main>
    )
}
