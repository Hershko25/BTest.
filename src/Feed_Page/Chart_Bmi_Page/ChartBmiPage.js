import React from 'react';
import Chart from '../Chart';
import Bmi from '../Bmi';
import NavBar from '../NavBar';
import HeaderBack from '../../assets/HeaderBack';
import styled from 'styled-components';

const Main = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;



`;

export default function ChartBmiPage() {
    return (
        <Main >
            <HeaderBack />
            <div>
                <Chart />
                <Bmi />
            </div>
            <NavBar />
        </Main>
    )
}
