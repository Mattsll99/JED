import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'


const Section1 = () => {
  return (
    <Container>
      <Title>Le cabinet comptable qui facilite la <br/>gestion de votre entreprise</Title>
      <Link target='_blank' href='https://calendly.com/jed-conseil-expertisecomptable/call-jed-conseil-expertise-comptable15'>
      <ButtonContainer>
        <Wrapper>Prendre RDV</Wrapper>
        <Arrow src="../assets/button-arrow.png"/>
      </ButtonContainer>
      </Link>
      <Wrap></Wrap>
    </Container>
  )
}

export default Section1

const Container = styled.div`
  width: 100%; 
  height: auto; 
  display: flex; 
  flex-direction: column; 
  align-items: center;
  color: #1E1E1E;
  margin-top: 270px;
  text-align: center;
  @media(max-width: 590px ) {
    margin-top: 180px;
  }
  //margin-top: 100px;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 500;
`;

const ButtonContainer = styled.div`
  margin-top: 50px;
  height: 60px; 
  width: auto;
  padding: 5px; 
  border-radius: 200px;
  background: transparent;
  border: solid 1px #2E2E2E;
  display: flex; 
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const Wrapper = styled.div`
  height: 100%; 
  width: auto; 
  padding: 10px;
  display: flex; 
  align-items: center; 
  justify-content: center; 
  font-size: 22px; 
  color: #ffffff; 
  font-weight: 300; 
  background: #294979;
  border-radius: 100px;
`;

const Arrow = styled.img`
  height: 20px; 
  width: auto;
  transform: rotate(-90deg);
  margin-left: 10px;
`;

const Wrap = styled.div`
  height: auto; 
  display: flex; 
  flex-direction: row;
`;