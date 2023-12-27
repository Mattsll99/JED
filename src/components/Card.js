import React from 'react'
import styled from 'styled-components'

const Card = ({title, subtitle, icon}) => {
  return (
    <Container>
      <Top>
        <Icon src={icon}/>
      </Top>
      <Title>{title}</Title>
      <Wrap>{subtitle}</Wrap>
    </Container>
  )
}

export default Card

const Container = styled.div`
  height: 330px; 
  width: 250px;
  background: #F5F5F5;
  position: relative;
  border-radius: 30px;
  -webkit-box-shadow: 3px 5px 14px 0px rgba(30,30,30,0.7); 
  box-shadow: 3px 5px 14px 0px rgba(30,30,30,0.7);
  display: flex; 
  flex-direction: column; 
  align-items: center;
  @media(max-width: 1070px) {
    //height: auto; 
    //width: 3vw;
    width: 23vw;
  }
  @media(max-width: 890px) {
    height: 400px;
  }
  @media(max-width: 819px) {
    width: 100%;
    height: auto;
    margin-top: 60px;
  }
`;

const Icon = styled.img`
  height: 30px; 
  width: auto;
`;

const Top = styled.div`
  height: 50px; 
  width: 120px; 
  border-radius: 15px; 
  position: absolute; 
  top: -25px; 
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  background: #294979;
  display: flex; 
  align-items: center; 
  justify-content: center;
`;

const Title = styled.text`
  font-size: 20px; 
  font-weight: 500; 
  color: #294979;
  margin-top: 50px;
  font-family: poppins;
`;

const Wrap = styled.div`
  margin-top: 10px; 
  font-size: 16px; 
  font-weight: 400; 
  color: #1E1E1E; 
  text-align: center;
  padding: 10px; 
  font-family: poppins;
`;