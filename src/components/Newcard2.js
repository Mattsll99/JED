import React from 'react'
import styled from 'styled-components'
import Line from './Line'

const Newcard2 = () => {
  return (
    <Container>
      <Top>Accompagnement aux évolutions SI & Transformation digitale</Top>
      <Line 
        text="Pilotage et conduite du changement"
      />
      <Line 
        text="Digitalisation des processus"
      />
      <Line 
        text="Migration des applications"
      />
      <Line 
        text="Évolution des outils de pilotage financier"
      />
    </Container>
  )
}

export default Newcard2

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