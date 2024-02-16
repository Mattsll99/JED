import React from 'react'
import styled from 'styled-components'

const SecondPage = () => {
  return (
    <Container>
      <Panel></Panel>
    </Container>
  )
}

export default SecondPage

const Container = styled.div`
  height: 100vh; 
  width: 100vw; 
  background: green; 
  display: flex; 
  align-items: center; 
  justify-content: center;
`;

const Panel = styled.div`
  height: 30%; 
  width: 30%; 
  background: blue;
`;