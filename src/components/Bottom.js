import React, { useState } from 'react'
import styled from 'styled-components'

const Bottom = () => {
  
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Container>
      <Left>
        <Line style={{fontSize:"20px"}}>À propos de nous</Line>
        <Line style={{marginTop:"20px"}}>Société inscrite à l&apos; Ordre des experts comptables de Paris</Line>
        <Line>Ile-de-France. Domiciliée au 84 rue de Normandie</Line>
        <Line>92400 Courbevoie</Line>
        <PolText onClick= {handleOpen}>Politique de confidentialité</PolText>
      </Left>
      <Right>
      <Logo2 src="../assets/ordre_comptable.png"/>
      <Line style={{marginTop:"20px"}}>Ordre des Experts-Comptables région Paris Ile-de-France</Line>
      <Line>50 rue de Londres</Line>
      <Line>75378 Paris cedex 08</Line>
      </Right>
      {open === true &&
        <PolWrapper onClick={handleClose}>
        <Title>Mentions légales</Title>
        <BottomText>Nom de la société: JED Conseil</BottomText>
        <BottomText>Forme juridique: SARL unipersonnelle</BottomText>
        <BottomText>Addresse: 84 RUE DE NORMANDIE 92 400 COURBEVOIE</BottomText>
        <BottomText>Téléphone: 06 03 18 77 99</BottomText>
        <BottomText>Email: jessie.deslandes@jed-ec.com</BottomText>
        <BottomText>Directrice de la publication: MME Jessie Deslandes</BottomText>
        <BottomText>Reponsable de la rédaction: MME Jessie Deslandes</BottomText>
        <BottomText></BottomText>
        <Title style={{marginTop: "20px"}}>Protection des données personnelles</Title>
        <BottomText>Les informations recueillies sur le site web sont utilisées dans le cadre de la relation commerciale avec la société. Elles ne sont ni cédées ni vendues à des tiers. La société s'engage à prendre toutes les mesures nécessaires pour garantir la sécurité et la confidentialité des données personnelles conformément au Règlement Général sur la Protection des Données (RGPD).
Conformément à la législation en vigueur, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Vous pouvez exercer ces droits en contactant la société par email à l'adresse accueil@3ecsconseil.fr ou par courrier à l'adresse postale 20 AV LEONARD DE VINCI 92400 COURBEVOIE.</BottomText>
        <Title style={{marginTop: "20px"}}>Proprieté intellectuelle</Title>
        <BottomText>Tous les contenus du site web (textes, images, vidéos, etc.) sont la propriété exclusive de la société ou de ses partenaires et sont protégés par le droit d'auteur et le droit des marques. Toute reproduction, modification, diffusion ou exploitation commerciale, totale ou partielle, sans l'autorisation préalable écrite de la société est strictement interdite.</BottomText>
        <Title style={{marginTop: "20px"}}>Liens</Title>
        <BottomText>Le site web peut contenir des liens vers d'autres sites internet. La société ne peut être tenue responsable du contenu de ces sites ni des pratiques de leurs éditeurs en matière de protection des données personnelles.</BottomText>
      </PolWrapper>
      }
    </Container>
  )
}

export default Bottom

const Container = styled.div`
  height: 400px; 
  width: 100%; 
  background: #294979;
  margin-top: 70px;
  display: flex; 
  flex-direction: row; 
  font-family: poppins;
  color: #ffffff;
  @media(max-width: 1007px) {
    flex-direction: column;
    height: auto;
    align-items: center;
  }

`;

const PolWrapper = styled.div`
  position: fixed; 
  height: 86vh; 
  width: 100vw; 
  background: red;
  bottom: 0;
  z-index:5;
  border-top-left-radius: 80px; 
  border-top-right-radius: 80px;
  display: flex; 
  flex-direction: column;
  background: #294979;
  overflow-y: scroll;
  padding-top: 50px;
  padding-left: 50px; 
  padding-right: 40px;
`;

const BottomText = styled.text`
  color: #ffffff; 
  font-size: 14px;
`;

const Title = styled.text`
  font-size: 30px; 
  color: #ffffff;
`;

const Left = styled.div`
  height: 100%; 
  width: 50%; 
  display: flex; 
  flex-direction: column; 
  padding: 50px;
  align-items: start; 
  justify-content: center;
  @media(max-width: 1007px) {
    width: 100%;
    align-items: center;
  }
`;

const Right = styled(Left)`
  display: flex; 
  align-items: start; 
  justify-content: center;
  @media(max-width: 1007px) {
    width: 100%;
    align-items: center;
  }
`;

const Logo = styled.img`
  height: auto; 
  width: 220px;
`;

const Logo2 = styled.img`
  height: auto; 
  width: 220px;
  margin-top: 50px;
`;

const Line = styled.div`
  display: flex; 
  flex-direction: row; 
  align-items: center;
  //background: red;
  width: auto;
  font-size: 14px;
`;

const Map = styled.img`
  height: 20px; 
  width: auto;
`;

const Text = styled.text`
  font-weight: 300;
`;

const PolText = styled.text`
  margin-top: 30px; 
  font-size: 20px; 
  cursor: pointer;
`;