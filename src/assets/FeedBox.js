import React from 'react';
import styled from 'styled-components';





const Box=styled.div`

    width: 90%;
    height: 180px;
    background: rgba(255, 255, 255, 0.06);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin: auto;
    border-radius: 15px;
    border-right: ${props=>props.color} solid 2px;
    color: white;
    font-size: 14px;
    text-align: right;
    box-sizing: border-box;
    padding-right: 15px;
    direction: rtl;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 25px;
    overflow-x: scroll;
    padding-left: 10px;


`;
export default function FeedBox({title,text,IndexStatus}) {

    let color;
    if(IndexStatus==='Above' || IndexStatus==='Below'){
         color='red';
    }
    else{
        color='green'
    }

  return (
    <Box color={color}>
        <h3>{title}</h3>
        <p>{text}</p>
        <p>קרא עוד{' >'}</p>
    </Box>
  )
}
