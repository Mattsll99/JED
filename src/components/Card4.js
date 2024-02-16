import React from 'react'
import styled from 'styled-components'
import Line from './Line'

const Card4 = () => {
  return (
    <Container>
      <Top>
        <Cover>
          <Icon src="../assets/team_logo.png"/>
        </Cover>
      </Top>
      <Body>
        <Title>Gestion sociale</Title>
        <Subtitle>Nous prenons en charge la gestion de vos obligations envers vos salariés</Subtitle>
        <Line 
          text="Bulletins de paie et contrats de travail"
        />
        <Line 
          text="Déclarations mensuelles et paiements de cotisations"
        />
        <Line 
          text="Gestion des sorties et des entrées dans vos effectifs"
        />
        <Line 
          text="Gestion des congés payés et des absences pour maladie"
        />
        <Line 
          text="Déclaration sociale du dirigeant"
        />
      </Body>
    </Container>
  )
}

export default Card4

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
    margin-top: 20px;
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