import Button from '@/components/Button'
import Section5 from '@/components/Section5'
import Section6 from '@/components/Section6'
import React from 'react'
import styled from 'styled-components'

const Services = () => {
  return (
    <Container>
      <Header>
          <Logo src="../assets/logo_final.png"/>
          <Button />
        </Header>
        <Section5 />
        <Section6 />
    </Container>
  )
}

export default Services

const Container = styled.div`
  width: 100vw; 
  height: auto; 
  display: flex; 
  flex-direction: column; 
  align-items: center;
`;

const Header = styled.div`
  height: auto; 
  width: 100%; 
  display: flex; 
  flex-direction: row; 
  align-items: center; 
  justify-content: space-between;
  padding: 30px;
  position: fixed; 
  top: 0;
  background: #ffffff; 
  z-index: #ffffff;
  z-index: 3;
  //background: red;
`;

const Logo = styled.img`
  height: 70px; 
  width: auto;
`;