import React from 'react'
import styled from 'styled-components'

const Bottom = () => {
  return (
    <Container>
      <Left>
        <Logo src="../assets/logo_final.png"/>
        <Logo2 src="../assets/ordre_comptable.png"/>
      </Left>
      <Right>
        <Line>
          <Map src="../assets/map_icon.png"/>
          <Text style={{marginLeft:"10px"}}>84 rue de Normandie, 92400 Courbevoie</Text>
        </Line>
        <Text style={{marginTop:"10px", marginLeft:"23px"}}>+33 6 03 18 77 99</Text>
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
  @media(max-width: 512px) {
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
  @media(max-width: 512px) {
    width: 100%;
    align-items: center;
  }
`;

const Right = styled(Left)`
  display: flex; 
  align-items: start; 
  justify-content: center;
  @media(max-width: 512px) {
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
`;

const Map = styled.img`
  height: 20px; 
  width: auto;
`;

const Text = styled.text`
  font-weight: 300;
`;