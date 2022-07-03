import React, { useState } from 'react';
import styled from 'styled-components';
import recommendation from '../Image/recommendation.png'
import Recommendationbox from './Recommendationbox';
import {recommendation as recommendation_arr} from '../JSON/recommendation';



const Main = styled.ul`

list-style-type: none;
padding-left: 0;
display: flex;
overflow: auto;
overflow-y: hidden;
color: white;
text-align: center;

&::-webkit-scrollbar {
  width: 1px;
}
&::-webkit-scrollbar-thumb {
  background: transparent; 
}

& .circle{
  position:relative;
  width:100px;
  height:100px;


  svg{
    fill:none;
    stroke:#0d9da1 ;
    stroke-linecap: round;
    stroke-width:3;
    stroke-dasharray: 1;
    stroke-dashoffset: 0;
    animation: stroke-draw 6s ease-out infinite alternate; 
    // animation: stroke-draw 6s cubic-bezier(0.77, 0, 0.175, 1) infinite alternate; 
  }
  img{
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%, -50%);
    width:40px;
    border-radius:50%;
  }
}
@keyframes stroke-draw {
  from{
    stroke-dasharray: 1;
  }
  to{
    transform:rotate(180deg);
    stroke-dasharray: 8;
  }
}


`;


export default function Storie() {



    const [showrecommendation, setshowrecommendation] = useState();

 
    
    return (
        <Main>
            {
                recommendation_arr.map((per, key) => {
                 return   <li key={key} onClick={()=>setshowrecommendation(per)}>
                        <div className="circle">
                            <img src={recommendation} alt='Like'  />
                            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ enableBackground: 'new -580 439 577.9 194' }}>
                                <circle cx="50" cy="50" r="40" />
                            </svg>
                        </div>
                        <p>{key+1} טיפ יומי</p>
                    </li>
                })
            }
            {
               showrecommendation !==undefined && <Recommendationbox recommendation={showrecommendation} setshowrecommendation={setshowrecommendation}/>
            }

        </Main>
    )
}
