import React from 'react'
import styled from 'styled-components'
import Line from './Line'

const Newcard = () => {
  return (
    <Container>
      <Top>DAF et Management de transition</Top>
      <Line 
        text="Management d'équipe"
      />
      <Line 
        text="Maitrise de la comptabilité générale et consolidée en normes françaises et IFRS"
      />
      <Line 
        text="Maitrise de la réglementation bancaire et des reportings ACPR (RUBA, COREP, FINREP, Bale IV,...)"
      />
      <Line 
        text="Suivi budgétaire et de trésorerie"
      />
      <Line 
        text="Gestion du social"
      />
    </Container>
  )
}

export default Newcard

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