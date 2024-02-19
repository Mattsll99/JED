import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Link from 'next/link'

const Section3 = () => {
  
  return (
    <Container>
      <Button>
        <Circle>2</Circle>
        <Text>Notre approche</Text>
      </Button>
      <Title>Notre équipe vous accompagne sur<br/> votre comptabilité, vos enjeux fiscaux,<br/> sociaux et juridiques  </Title>
      <Panel>
        <Card 
          icon="../assets/lhorloge.png"
          title="Réactivité"
          subtitle="Votre temps étant précieux, notre équipe est rapidement disponible. Nos moteurs : agilité et pertinence"
        />
        <Card 
          icon="../assets/oreille.png"
          title="Écoute"
          subtitle="Vous connaissez votre société mieux que personne. Vous écouter est au centre de notre stratégie pour agir efficacement"
        />
        <Card 
          icon="../assets/la-technologie.png"
          title="Technologie"
          subtitle="Nous vous proposons des outils comptables de dernière génération pour simplifier votre gestion et automatiser vos tâches (synchronisation de vos banques, dépôt des pièces fluides…)"
        />
        <Card 
          icon="../assets/chemin.png"
          title="Conseil"
          subtitle="Les outils sont pour nous au service de l’humain et nous restons à vos côtés pour vous conseiller au mieux"
        />
      </Panel>
      <Subtitle>Besoin de renseignements ?</Subtitle>
      <Link target='_blank' href='https://calendly.com/jed-conseil-expertisecomptable/call-jed-conseil-expertise-comptable15'>
      <CoverButton>
        <Wrap>Discutons-en</Wrap>
      </CoverButton>
      </Link>
      <TitleBis>Des outils pour une collaboration fluide</TitleBis>
      <Carousel>
        <Logo src="../assets/microsoft_logo.png"/>
        <Logo src="../assets/pennylane_logo.png"/>
        <Logo src="../assets/silae_logo.png"/>
        <Logo src="../assets/drive_logo.png"/>
        <Logo style={{ width:"160px", height: "auto"}}src="../assets/oracle_logo.png"/>
      </Carousel>
      <BottomWrapper>
        <Subtitle style={{color:"#ffffff", fontWeight: "400", fontSize: "26px"}}>Besoin de discuter avec un expert comptable ?</Subtitle>
        <Subtitle style={{color:'#ffffff', fontWeight:'300'}}>Nous vous offrons une consultation gratuite de 15 minutes pour échanger <br/>sur votre projet</Subtitle>
        <Link target='_blank' href='https://calendly.com/jed-conseil-expertisecomptable/call-jed-conseil-expertise-comptable15'>
        <BottomButton>PRENDRE RDV</BottomButton>
        </Link>
      </BottomWrapper>
    </Container>
  )
}

export default Section3

const Container = styled.div`
  width: 100%; 
  height: auto;
  display: flex; 
  flex-direction: column; 
  align-items: center;
  margin-top: 80px;
  text-align: center;
`;

const Logo = styled.img`
  height: 40px; 
  width: auto;
  @media(max-width: 872px) {
    height: 30px;
  }
  @media(max-width: 613px) {
    height: 20px;
  }
`;

const Button = styled.div`
  height: 50px; 
  width: 200px; 
  border-radius: 100px;
  padding: 5px;
  background: #1E1E1E;
  color: #ffffff;
  display: flex; 
  flex-direction: row;
  align-items: center;
  font-family: poppins;
`;

const Circle = styled.div`
  height: 35px; 
  width: 35px; 
  background: #ffffff;
  border-radius: 100px;
  display: flex; 
  align-items: center; 
  justify-content: center; 
  font-size: 16px; 
  color: #1E1E1E;
  font-weight: 500;
`;

const Text = styled.text`
  font-size: 16px; 
  font-weight: 400; 
  margin-left: 10px;
  color: #ffffff;
`;


const Title = styled.text`
  font-size: 35px; 
  font-weight: 400; 
  color: #1E1E1E;
  margin-top: 40px;
  font-family: poppins;

`;

const Panel = styled.div`
  height: auto; 
  width: 80%; 
  //padding-left: 3vw;
  //padding-right: 3vw;
  //padding-left: 30px; 
  //padding-right: 30px;
  display: flex; 
  flex-direction: row; 
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
  @media(max-width: 1270px) {
    width: 90%;
  }
  @media(max-width: 1150px) {
    width: 100%;
    padding-left: 20px; 
    padding-right: 20px;
  }
  @media(max-width: 819px) {
    flex-direction: column;
    width: 100%;
    padding-left: 20px; 
    padding-right: 20px;
  }
`;

const Subtitle = styled.text`
  font-size: 20px; 
  font-weight: 500; 
  color: #1E1E1E;
  font-family: poppins;
  margin-top: 50px;
`;

const CoverButton = styled.div`
  margin-top: 30px;
  height: 60px; 
  width: 240px; 
  border-radius: 100px; 
  border: solid 1px #294979;
  padding:7px;
  display: flex; 
  flex-direction: row; 
  align-items: center;
`;

const Wrap = styled.div`
  height: 100%; 
  width: 80%; 
  border-radius: 100px; 
  background: #294979;
  align-items: center; 
  justify-content: center; 
  font-size: 17px; 
  font-weight: 300; 
  color: #ffffff;
  font-family: poppins;
  display: flex; 
  align-items: center; 
  justify-content: center;
`;

const TitleBis = styled.text`
  font-size: 20px; 
  font-weight:500; 
  font-family: poppins; 
  color: #1E1E1E;
  margin-top: 100px;
`;

const Carousel = styled.div`
  margin-top: 20px; 
  height: 60px; 
  width: 80%; 
  display: flex; 
  flex-direction: row; 
  align-items: center; 
  justify-content: space-between; 
  //background: red;
  @media(max-width: 1130px) {
    width: 830px;
  }
  @media(max-width: 872px) {
    width: 100%;
    padding-left: 20px; 
    padding-right:20px;
  }
  @media(max-width: 613px) {
    padding-left: 10px; 
    padding-right: 10px;
  }
`;

const BottomWrapper = styled.div`
  height: auto; 
  width: 80%; 
  background: #294979;
  margin-top: 80px; 
  display: flex; 
  flex-direction: column; 
  align-items: center;
  color: #ffffff;
  border-radius: 30px;
  padding: 20px;
`;

const BottomButton = styled.div`
  height: 60px; 
  width: 190px; 
  background: #ffffff; 
  border-radius: 100px; 
  display: flex; 
  align-items: center; 
  justify-content: center;
  font-weight: 500; 
  color: #294979;
  font-size: 18px;
  margin-top: 20px;
  cursor: pointer;
`;