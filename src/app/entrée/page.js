"use client"

import React,{ useEffect, useState }  from 'react'
import styled from 'styled-components'
import Button from '@/components/Button'
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
import Section4 from '@/components/Section4'
import Bottom from '@/components/Bottom'
import Link from 'next/link'
import Header from '@/components/Header'


const Newentry = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time with setTimeout
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 8000); // Adjust the time as needed

    // Cleanup function to clear timeout
    return () => clearTimeout(timeout);
  }, []); // Run effect only once after initial render

  if (isLoading) {
    // Return loading indicator or placeholder
    return <div>Loading...</div>;
  }

  console.log(isLoading)

  return (
    <Container>
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Bottom />
    </Container>
  )
}

export default Newentry

const Container = styled.div`
  width: 100vw; 
  height: auto;
  display: flex;
  flex-direction: column;
  //background: red;
`;



const Logo = styled.img`
  height: 120px; 
  width: auto;
  //border: black;
  //border: 2px solid black;
`;
