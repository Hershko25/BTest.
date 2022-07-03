import React from 'react';
import styled from 'styled-components';

const Btn=styled.button`


  font-family: 'Open Sans', sans-serif;
  border:solid #00cec8 2px;
  font-size: 14px;
  color: white;
  text-decoration: none;
  padding: 10px 25px;
  border-radius: 25px;
  background-color: transparent;
  transition: all ease-in-out 0.3s;
  margin-bottom: 15px;
  cursor: pointer;
  &:hover{
    background-color: #00cec8;
  }


`;

export default function Button({onClick,children}) {
  return (
    <Btn onClick={onClick}>{children}</Btn>
  )
}
