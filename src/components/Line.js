import React from 'react'
import styled from 'styled-components'

const Line = ({text}) => {
  return (
    <Container>
      <Logo src="../assets/pin_check.png"/>
      <Text>{text}</Text>
    </Container>
  )
}

export default Line

const Container = styled.div`
  height: auto; 
  width: 100%; 
  //background: red;
  display: flex; 
  flex-direction: row; 
  align-items: center;
  padding: 10px;
  font-size: 15px;
  color: #1E1E1E;
  text-align: start;
`;

const Logo = styled.img`
  height: 20px; 
  width: 20px;
`;

const Text = styled.text`
  margin-left: 10px;
  font-size: 14px;
`;