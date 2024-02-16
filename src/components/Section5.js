import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'

const Section5 = () => {
  return (
    <Container>
      <Title>Au delà de vos objectifs</Title>
      <Subtitle>Nos services s&apos;adaptent en fonction de vos objectifs et vos besoins. La finalité<br/> de notre accompagnement est de vous faire aller plus vite</Subtitle>
      <div style={{marginTop:"20px"}}><Button/></div>
      <Title2>Nous vous accompagnons sur toutes vos obligations administratives<br/>Vous déposez vos pièces et nous nous occupons du reste.</Title2>
      <Panel>
        <Card2 />
        <Card3 />
        <Card4 />
      </Panel>
    </Container>
  )
}

export default Section5

const Container = styled.div`
  width: 100%; 
  height: auto; 
  display: flex; 
  flex-direction: column;
  align-items: center;
  color: #1E1E1E;
  font-family: poppins;
  text-align: center;
  margin-top: 150px;
  @media(max-width: 760px){
    padding-left: 10px; 
    padding-right: 10px;
    //margin-top: 50px;
  }
`;

const Title = styled.text`
  font-size: 50px;
  font-weight: 500;
  margin-top: 100px;
`;

const Subtitle = styled.text`
  margin-top: 20px;
  font-size: 18px;
  @media(max-width: 760px) {
    font-size: 16px;
  }
`;

const Title2 = styled.text`
  font-weight: 500; 
  font-size: 22px; 
  margin-top: 100px;
`;

const Panel = styled.div`
  height: auto; 
  width: 100%;
  padding-left: 130px;
  padding-right: 130px;
  //background: red; 
  display: flex; 
  flex-direction: row; 
  align-items: start; 
  margin-top: 70px;
  justify-content: space-between;
  @media(max-width: 1320px){
    //padding-left: 10px; 
    //padding-right: 10px;
    width: 1350px;
  }
  //@media(max-width: 1130px) {
    //flex-direction: column;
  //}
  @media(max-width: 1130px) {
    width: 100%;
    //background: red;
    //justify-content: space-between;
    padding-left: 10px; 
    padding-right: 10px;
  }
  @media(max-width:720px) {
    flex-direction: column;
  }
`;