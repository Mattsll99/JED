import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Button = () => {
  
  return (
    <Link target='_blank' href='https://calendly.com/jed-conseil-expertisecomptable/call-jed-conseil-expertise-comptable15'>
    <Container>
      <Wrapper>Nous contacter</Wrapper>
      <Arrow src="../assets/button-arrow.png"/>
    </Container>
    </Link>
  )
}

export default Button

const Container = styled.div`
  height: 50px; 
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
  font-size: 18px; 
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