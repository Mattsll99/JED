import React from 'react'
import styled from 'styled-components'
import Line from './Line'

const Card2 = () => {
  return (
    <Container>
      <Top>
        <Cover>
          <Icon src="../assets/compta_logo.png"/>
        </Cover>
      </Top>
      <Body>
        <Title>Comptabilité 100% dématérialisée</Title>
        <Subtitle>Chez JED conseil, votre comptabilité est optimisée grâces à des outils digitaux innovants</Subtitle>
        <Line 
          text="Transmission facile des pièces"
        />
        <Line 
          text="Comptabilité à jour en 'quasi temps réel'"
        />
        <Line 
          text="Connexion à vos flux bancaires automatique"
        />
        <Line 
          text="Bilan, compte de résultat et annexe"
        />
      </Body>
    </Container>
  )
}

export default Card2

const Container = styled.div`
  height: auto; 
  width: 350px;
  background: #F5F5F5;
  position: relative;
  border-radius: 30px;
  -webkit-box-shadow: 3px 5px 14px 0px rgba(30,30,30,0.7); 
  box-shadow: 3px 5px 14px 0px rgba(30,30,30,0.7);
  display: flex; 
  flex-direction: column; 
  align-items: center;
  font-family: poppins;
  color: #1E1E1E;
  padding: 10px;
  @media(max-width: 1130px) {
    width: 30vw;
  }
  @media(max-width: 720px) {
    width: 100%;
  }
`;

const Icon = styled.img`
  height: 30px; 
  width: auto;
`;

const Top = styled.div`
  height: 70px; 
  width: 100%; 
  padding: 10px;
`;

const Body = styled.div`
  height: auto; 
  width: 100%; 
  display: flex; 
  flex-direction: column;
  margin-top: 20px;
`;

const Cover = styled.div`
  height: 50px; 
  width: 50px;
  background: #294979;
  border-radius: 100px;
  display: flex; 
  align-items: center; 
  justify-content: center;
`;

const Title = styled.text`
  font-weight: 500;
`;

const Subtitle = styled.text`
  margin-top: 10px;
`;