import React from 'react'
import styled from 'styled-components'

const MenuButton = () => {
  return (
    <Container>
      <Circle>1</Circle>
      <Text>Nos services</Text>
    </Container>
  )
}

export default MenuButton

const Container = styled.div`
  height: 40px; 
  width: 180px; 
  border-radius: 100px;
  padding: 5px;
  background: #ffffff;
  display: flex; 
  flex-direction: row;
  align-items: center;
  font-family: poppins;
`;

const Circle = styled.div`
  height: 35px; 
  width: 35px; 
  background: #1E1E1E;
  border-radius: 100px;
  display: flex; 
  align-items: center; 
  justify-content: center; 
  font-size: 16px; 
  color: #ffffff;
`;

const Text = styled.text`
  font-size: 16px; 
  font-weight: 400; 
  margin-left: 10px;
  color: #1E1E1E;
`;