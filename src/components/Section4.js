import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Section4 = () => {
  
  return (
    <Container>
      <Top>
        <Cover>
          <Circle>3</Circle>
          <Text>Qui nous sommes</Text>
        </Cover>
        <SubText style={{marginTop: "60px"}}>Nous sommes un cabinet d’expertise comptable <br/>créé en 2018 et installé à Courbevoie (92)</SubText>
        <WrapText>
        <SubText style={{marginTop: "30px", fontSize:"30px"}}>Notre fondatrice:</SubText>
        </WrapText>
      </Top>
      <Body>
        <Left>
          <Back>
            <Profile src="../assets/Jessie_no_bg.png"/>
          </Back>
        </Left>
        <Right>
          <Title>Jessie Deslandes</Title>
          <Subtitle>Expert-comptable et dirigeante de JED Conseil & Expertise comptable</Subtitle>
          <Line style={{marginTop:"25px"}}>
            <Link target='_blank' href='https://www.linkedin.com/in/jessie-deslandes-0288254/'>
            <Logo src="../assets/linkedin_icon.png"/>
            </Link>
            <Link target='_blank' href='https://www.facebook.com/jed.conseil.expertisecomptable'>
            <Logo src="../assets/facebook_icon.png" style={{marginLeft:"15px"}}/>
            </Link>
          </Line>
          <Line style={{marginTop:"40px"}}>
            <Logo src="../assets/pin_check.png"/>
            <Intro>Passionée par les chiffres et les nouvelles technologies</Intro>
          </Line>
          <Line style={{marginTop:"40px"}}>
            <Logo src="../assets/pin_check.png"/>
            <Intro>Diplomée de Institut Mines-Télécom Business School en 2007, puis du DEC en 2015</Intro>
          </Line>
          <Line style={{marginTop:"40px"}}>
            <Logo src="../assets/pin_check.png"/>
            <Intro>15 ans d&apos;expérience dans l&apos;accompagnement des sociétés de services</Intro>
          </Line>
          <Link target='_blank' href='https://calendly.com/jed-conseil-expertisecomptable/call-jed-conseil-expertise-comptable15'>
          <DivButton>
          <Button>
            <Wrap>Nous contacter</Wrap>
          </Button>
          </DivButton>
          </Link>
        </Right>
      </Body>
    </Container>
  )
}

export default Section4

const Container = styled.div`
  width: 100%; 
  height: auto;
  display: flex; 
  flex-direction: column;
  padding: 60px;
  margin-top: 50px;
`;

const WrapText = styled.div`
  height: auto; 
  width: 100%; 
  display: flex; 
  padding-left: 60px;
  margin-top: 40px;
  @media(max-width: 800px) {
    align-items: center;
    justify-content: center;
    padding: 0;
  }
`;

const SubText = styled.text`
  font-size: 35px; 
  font-weight: 400; 
  color: #1E1E1E;
  margin-top: 40px;
  font-family: poppins;
`;

const DivButton = styled.div`
  height: auto; 
  width: 100%;
  cursor: pointer;
  @media(max-width: 1000px) {
    display: flex; 
    align-items: center; 
    justify-content: center;
  }
`;

const Profile = styled.img`
  position: absolute; 
  bottom: -1.5px; 
  right: -40px;
  height: 400px; 
  width: auto;
`;

const Top = styled.div`
  height: auto; 
  width: 100%; 
  text-align: center;
  display: flex; 
  flex-direction: column;
`;

const Body = styled.div`
  height: auto; 
  width: 100%; 
  display: flex; 
  flex-direction: row; 
  padding: 70px;
  //background: red;
  @media(max-width: 1120px) {
    padding-left: 0; 
    padding-right: 0;
  }
  @media(max-width: 1000px) {
    flex-direction: column;
  }
`;

const Cover = styled.div`
  height: 50px; 
  width: 200px; 
  background: #1E1E1E; 
  border-radius: 80px; 
  display: flex; 
  flex-direction: row;
  align-items: center;
  margin-left: 70px;
  padding: 5px; 
`;

const Circle = styled.div`
  height: 35px; 
  width: 35px; 
  background: #ffffff;
  border-radius: 100px;
  display: flex; 
  align-items: center; 
  justify-content: center; 
  font-family: poppins; 
  color: #1E1E1E; 
  font-weight: 500; 
  font-size: 16px;
`;

const Text = styled.text`
  font-size: 16px; 
  font-weight: 400; 
  margin-left: 10px;
  color: #ffffff;
`;

const Left = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: center; 
  height: auto;
  width: 50%;
  //@media(max-width: 1120px) {
    //justify-content: start;
    //background: red;
  //}
  @media(max-width: 1000px) {
    width: 100%;
  }
`;

const Right = styled.div`
  height: auto; 
  width: 50%; 
  display: flex; 
  flex-direction: column;
  justify-content: start;
  color: #1E1E1E;
  @media(max-width: 1000px) {
    width: 100%;
    margin-top: 50px;
    //text-align: center;
    justify-content: center;
    //align-items: center;
  }
`;

const Back = styled.div`
  height: 500px; 
  width: 400px;
  background: #294979;
  border-top-left-radius: 1000px; 
  border-top-right-radius: 1000px;
  position: relative;
  //position: relative;
`;

const Title = styled.text`
  font-family: poppins; 
  font-size: 50px;
  font-weight: 400;
`;

const Subtitle = styled.text`
  font-family: poppins;
  margin-top: -10px;
`;

const Line = styled.div`
  height: auto; 
  width: auto; 
  display: flex; 
  flex-direction: row; 
  align-items: center;
`;

const Logo = styled.img`
  height: 25px; 
  width: 25px; 
  background: transparent;
  cursor: pointer;
`;

const Intro = styled.text`
  font-size: 18px; 
  font-family: poppins; 
  font-weight: 400; 
  color: #1E1E1E;
  margin-left: 15px;
`;

const Button = styled.div`
  height: 60px; 
  width: 220px; 
  border: solid 1px #294979;
  margin-top: 40px;
  border-radius: 100px; 
  padding: 7px; 
  display: flex; 
  flex-direction: row; 
  align-items: center;
`;

const Wrap = styled.div`
  height: 100%; 
  width: auto; 
  padding: 15px; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  font-size: 16px; 
  font-weight: 400;
  font-family: poppins; 
  color: #ffffff;
  background: #294979;
  border-radius: 200px;
`; 