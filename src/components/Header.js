import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Header = () => {
  return (
    <Container>
            <Link href="/entrée">
          <Logo src="../assets/logo_final.png"/>
          </Link> 
          <Button />
        </Container>
  )
}

export default Header

const Container = styled.div`
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
  height: 120px; 
  width: auto;
  //border: black;
  //border: 2px solid black;
`;

import Button from '@/components/Button'