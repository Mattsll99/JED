import React from 'react'
import styled from 'styled-components'

const Bottom = () => {
  return (
    <Container>
      <Left>
        <Line style={{fontSize:"20px"}}>À propos de nous</Line>
        <Line style={{marginTop:"20px"}}>Société inscrite à l&apos; Ordre des experts comptables de Paris</Line>
        <Line>Ile-de-France. Domiciliée au 84 rue de Normandie</Line>
        <Line>92400 Courbevoie</Line>
      </Left>
      <Right>
      <Logo2 src="../assets/ordre_comptable.png"/>
      <Line style={{marginTop:"20px"}}>Ordre des Experts-Comptables région Paris Ile-de-France</Line>
      <Line>50 rue de Londres</Line>
      <Line>75378 Paris cedex 08</Line>
      </Right>
    </Container>
  )
}

export default Bottom

const Container = styled.div`
  height: 400px; 
  width: 100%; 
  background: #294979;
  margin-top: 70px;
  display: flex; 
  flex-direction: row; 
  font-family: poppins;
  @media(max-width: 1007px) {
    flex-direction: column;
    height: auto;
    align-items: center;
  }

`;

const Left = styled.div`
  height: 100%; 
  width: 50%; 
  display: flex; 
  flex-direction: column; 
  padding: 50px;
  align-items: start; 
  justify-content: center;
  @media(max-width: 1007px) {
    width: 100%;
    align-items: center;
  }
`;

const Right = styled(Left)`
  display: flex; 
  align-items: start; 
  justify-content: center;
  @media(max-width: 1007px) {
    width: 100%;
    align-items: center;
  }
`;

const Logo = styled.img`
  height: auto; 
  width: 220px;
`;

const Logo2 = styled.img`
  height: auto; 
  width: 220px;
  margin-top: 50px;
`;

const Line = styled.div`
  display: flex; 
  flex-direction: row; 
  align-items: center;
  //background: red;
  width: auto;
  font-size: 14px;
`;

const Map = styled.img`
  height: 20px; 
  width: auto;
`;

const Text = styled.text`
  font-weight: 300;
`;