"use client"

import Image from 'next/image'
import styles from './page.module.css'
import styled from 'styled-components'
import Button from '@/components/Button'
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
import Section4 from '@/components/Section4'
import Bottom from '@/components/Bottom'
import Entry from './Entry'
import Services from './Services'

export default function Home() {
  return (
    
      <Container>
        
       <Entry />
      </Container>
    
  )
}

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
`;

const Logo = styled.img`
  height: 40px; 
  width: 100px;
  //border: black;
  border: 2px solid black;
`;
