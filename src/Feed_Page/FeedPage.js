import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Dr from '../Image/Dr.png';
import FeedBox from '../assets/FeedBox';
import Storie from './Storie';
import NavBar from './NavBar';
import Chart from './Chart';
import Bmi from '../Feed_Page/Bmi';
import { head } from '../Context/Store';



const Main = styled.main`

    height: 100vh;

    & .container{
        overflow-y: scroll;
        height: 80vh;
    }

    & .title{
        height: 20%;
        color: white;
        display: flex;
        justify-content: space-between;

        & h4{
            margin-right: 25px;
            margin-top: 35px;
        }
    }

    & .index-list{
        margin-top: 25px;
    
        
    }


`;

export default function FeedPage() {


    const UserInfo = useContext(head);

    useEffect(() => {

        if (localStorage.getItem('json') !== null) {
            UserInfo.setUserJson(JSON.parse(localStorage.getItem('json')))
        }

    }, [])


    return (
        <>
            {
                UserInfo.UserJson !== undefined &&

                <Main>
                    <Header />
                    <div className='container'>
                        <div>
                            <Storie />
                        </div>
                        <div className='title'>
                            <img src={Dr} alt='dr' style={{ width: '40%', height: '100%' }} />
                            <h4>  ברוך הבא - {UserInfo.UserJson.UserName}</h4>
                        </div>
                        <div>
                            <Chart />
                            <Bmi />
                        </div>
                        <div className='index-list'>
                            {
                                UserInfo.UserJson.Indexs.map((per, key) => <FeedBox
                                    key={key}
                                    title={per.Index_Name_He}
                                    text={per.The_purpose_of_the_test}
                                    IndexStatus={per.IndexStatus} ת
                                    full_index={per}
                                />)
                            }
                        </div>
                    </div>
                    <NavBar />
                </Main>
            }
        </>
    )
}
