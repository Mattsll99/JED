import React from 'react'
import styled from 'styled-components'
import Button from '@/components/Button'
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
import Section4 from '@/components/Section4'
import Bottom from '@/components/Bottom'

const Entry = () => {
  return (
    <Container>
        <Header>
          <Logo src="../assets/logo_final.png"/>
          <Button />
        </Header>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Bottom />
    </Container>
  )
}

export default Entry

const Container = styled.div`
  width: 100vw; 
  height: auto;
  display: flex;
  flex-direction: column;
  //background: red;
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
  margin-bottom: 80px;
  z-index: 3;
`;

const Logo = styled.img`
  height: 70px; 
  width: auto;
  //border: black;
  //border: 2px solid black;
`;
