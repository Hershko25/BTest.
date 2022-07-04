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

export default function FetchSignIn() {

    const UserInfo = useContext(head);
    const navigate=useNavigate();
    const apiurl = 'http://localhost:60311/api/RegiUser';
    const settings = {
        method: 'POST',
        body: JSON.stringify(UserInfo.UserInfo),
        headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json; charset=UTF-8',
        })
    };


    useEffect(() => {
        fetch(apiurl, settings)
            .then((res) => {
                return res.json();
            }).then((resJson) => {
                UserInfo.setIsLogin(true);
                localStorage.setItem('json', resJson)
                navigate('/feed')
            })
            .catch(() => console.log('error'))
    }, [])


    return (
        <Main>
            <Btest />
            <h1>מבצע פענוח</h1>
            <CircularProgress />
        </Main>
    )
}
