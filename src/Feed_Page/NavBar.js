import React, { useContext } from 'react';
import styled from 'styled-components';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import DonutSmallRoundedIcon from '@mui/icons-material/DonutSmallRounded';
import PlaylistAddCircleRoundedIcon from '@mui/icons-material/PlaylistAddCircleRounded';
import { useNavigate } from 'react-router-dom';
import { head } from '../Context/Store';

const Nav = styled.nav`

height: 10vh;
width: 100%;
background: rgba(255, 255, 255, 0.06);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
color: white;
display: flex;
justify-content: space-between;
align-items: center;
box-sizing: border-box;
padding: 0px 85px;
`;

export default function NavBar() {

    const navigate = useNavigate();
    const newreport = useContext(head);

    const new_report = () => {

        newreport.setNew_Report(true);
        navigate('/scanner')

    }

    return (
        <Nav>
            <DonutSmallRoundedIcon fontSize={'large'} onClick={() => navigate('/chartBmi')} />
            <GridViewRoundedIcon fontSize={'large'} onClick={() => navigate('/feed')} />
            <PlaylistAddCircleRoundedIcon fontSize={'large'} onClick={new_report} />
        </Nav>
    )
}
