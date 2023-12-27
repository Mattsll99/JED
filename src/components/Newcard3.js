import React from 'react'
import styled from 'styled-components'
import Line from './Line'

const Newcard3 = () => {
  return (
    <Container>
      <Top>Organisation des processus comptables</Top>
      <Line 
        text="Optimisation des processus comptables et financiers"
      />
      <Line 
        text="Mise en places des contrôles"
      />
    </Container>
  )
}

export default Newcard3

const Container = styled.div`
  height: auto; 
  width: 260px; 
  background: #ffffff;
  border-radius: 20px;
  padding: 10px;
  font-family: poppins;
  @media(max-width: 930px) {
    width: 30%;
  }
  @media(max-width: 755px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const Top = styled.div`
  height: auto; 
  width: 100%; 
  background: #1E1E1E; 
  padding: 10px; 
  color: #ffffff;
  font-weight: 300;
  border-radius: 10px;
`;