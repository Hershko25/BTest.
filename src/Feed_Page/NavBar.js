import React from 'react';
import styled from 'styled-components';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import DonutSmallRoundedIcon from '@mui/icons-material/DonutSmallRounded';
import PlaylistAddCircleRoundedIcon from '@mui/icons-material/PlaylistAddCircleRounded';



const Nav = styled.nav`

height: 10vh;

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
    return (
        <Nav>
            <DonutSmallRoundedIcon fontSize={'large'}  />
            <GridViewRoundedIcon fontSize={'large'} />
            <PlaylistAddCircleRoundedIcon fontSize={'large'} />
        </Nav>
    )
}
