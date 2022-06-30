import React from 'react';
import styled from 'styled-components';
import { json } from '../JSON/tempjson';
import Header from './Header';
import Dr5 from '../Image/Dr5.png';
import FeedBox from '../assets/FeedBox';
import Storie from './Storie';
import NavBar from './NavBar';



const Main = styled.main`

    height: 100vh;

    & .container{
        overflow-y: scroll;
        height: 90vh;
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
    return (
        <Main>
            <div className='container'>
                <Header />
                <div>
                    <Storie />
                </div>
                <div className='title'>
                    <img src={Dr5} alt='dr' style={{ width: '40%', height: '100%' }} />
                    <h4> {json.User} ברוך הבא</h4>
                </div>
                <div className='index-list'>
                    {
                        json.Indexs.map((per, key) => <FeedBox
                            key={key}
                            title={per.Index_Name_He}
                            text={per.The_purpose_of_the_test}
                            IndexStatus={per.IndexStatus}
                        />)
                    }
                </div>
            </div>
            <NavBar/>
        </Main>
    )
}
