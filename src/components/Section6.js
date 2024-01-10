import React from 'react'
import styled from 'styled-components'
import Newcard from './Newcard'
import Newcard2 from './Newcard2'
import Newcard3 from './Newcard3'
import Button from './Button'
import Button2 from './Button2'
import Bottom from './Bottom'

const Section6 = () => {
  return (
    <Container>
      <Wrapper>
        <Top>Des solutions pour répondre à tous vos besoins,<br/> quelle que soit votre taille</Top>
        <Body>
          <Newcard />
          <Newcard2 />
          <Newcard3 />
        </Body>
      </Wrapper>
      <Subtext>Nos équipes sont à votre disposition pour<br/> répondre à toutes vos questions</Subtext>
      <div style={{marginTop:'50px'}}>
      <Button />
      </div>
      <Bottom />
    </Container>
  )
}

export default Section6

const Container = styled.div`
  height: auto; 
  width: 100%; 
  display: flex; 
  flex-direction: column; 
  align-items: center;
  //padding-left: 30px; 
  //padding-right: 30px;
  margin-top: 130px;
  font-family: poppins;
  text-align: center;
`;

const Wrapper = styled.div`
  height: auto; 
  width: 70%;
  background: #294979;
  border-radius: 30px;
  padding-bottom: 30px;
  @media(max-width: 1290px) {
    width: 1069px;
  }
  @media(max-width: 1089px ) {
    width: 100%;
  }
`;

const Top = styled.div`
  height: 80px; 
  width: 100%; 
  padding: 30px;
  font-size: 25px;
  font-weight: 300;
  margin-bottom: 100px;
  @media(max-width: 348px) {
    margin-bottom: 150px;
  }
`;

const Body = styled.div`
  height: auto; 
  width: 100%; 
  //background: green;
  margin-top: 70px;
  display: flex; 
  flex-direction: row; 
  align-items: start; 
  justify-content: space-between;
  padding-left: 60px; 
  padding-right: 60px;
  @media(max-width: 755px) {
    flex-direction: column;
  }
  @media(max-width: 470px) {
    padding-left: 10px; 
    padding-right: 10px;
    padding-top: 30px;
  }
`;

const Subtext = styled.text`
  color: #1E1E1E;
  font-size: 22px;
  font-weight: 500;
  margin-top: 50px;
`;