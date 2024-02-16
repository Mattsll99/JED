import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const FirstPage = () => {
  return (
    <Container>
      <Link href='secondPage'>
        <Panel></Panel>
      </Link>
    </Container>
  )
}

export default FirstPage

const Container = styled.div`
  height: 100vh; 
  width: 100vw; 
  background: blue; 
  display: flex; 
  align-items: center; 
  justify-content: center;
`;

const Panel = styled.div`
  height: 30%; 
  width: 30%; 
  background: red;
`;