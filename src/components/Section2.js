import React, { useState } from 'react'
import styled from 'styled-components'
import MenuButton from './MenuButton'
import Link from 'next/link';

const Section2 = () => {
  
  const [imageSource, setImageSource] = useState('../assets/image_jed_comptable.jpg');
  const [title, setTitle] = useState('Expertise comptable');
  const [wrapperContent, setWrapperContent] = useState([
    'Comptabilité 100% dématérialisée',
    'Déclaration fiscale',
    'Gestion du social',
  ]);

  const [depo, setDepo] = useState("");

  //const handleCoverClick = (image, newTitle, newContent) => {
    //setImageSource(image);
    //setTitle(newTitle);
    //setWrapperContent(newContent);
  //};

  const handleCoverClick = (image, newTitle, newContent, newDepo) => {
    setWrapperContent(newContent);
    setImageSource(image);
    setTitle(newTitle);
    setDepo(newDepo)
  };

  return (
    <Container>
      <Line>
        <Icon src="../assets/coeur_bleu.png"/>
        <Text>Ils nous font confiance</Text>
      </Line>
      <Panel>
        <Logo src="../assets/jobteaser_logo.png"/>
        <Logo src="../assets/doctolib_logo.png"/>
        <Logo src="../assets/cyferall_logo.png"/>
        <Logo src="../assets/pixpay_logo.png"/>
        <Logo src="../assets/qonto_logo.png"/>
      </Panel>
      <Card>
        <Body>
          <Left>
            <TopLeft>
              <MenuButton />
            </TopLeft>
            <Title>{title}</Title>
            <Wrapper>
            {wrapperContent.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            <WrapSub>
            <SubText>{depo}</SubText>
            </WrapSub>
          </Wrapper>
          </Left>
          <Right>
            <WrapImage>
              <ImageCover src={imageSource}/>
            </WrapImage>
          </Right>
        </Body>
        <Bottom>
        <Cover
          onClick={() =>
            handleCoverClick(
              '../assets/image_jed_comptable.jpg',
              'Expertise comptable',
              [
                'Comptabilité 100% dématérialisée',
                'Déclaration fiscale',
                'Gestion du social',
              ],
              'Vous déposez vos pièces et nous faisons le reste'
            )
          }
        >
          Expertise comptable
        </Cover>
        <Cover
          onClick={() =>
            handleCoverClick(
              '../assets/image_jed_daf.jpg',
              'DAF externalisé',
              [
                'Management de transition',
                'Gestion des équipes',
                'Suivi budgétaire',
                'Suivi de trésorerie',
              ]
            )
          }
        >
          DAF externalisé
        </Cover>
        <Cover
          onClick={() =>
            handleCoverClick(
              '../assets/image_jed_transformation.jpg',
              'Transformation Fonction Finance',
              [
                'Accompagnement aux évolutions',
                'Pilotage et conduite du changement',
                'Migration comptable',
              ]
            )
          }
        >
          Transformation Fonction Finance
        </Cover>
        <Cover
          onClick={() =>
            handleCoverClick(
              '../assets/image_jed_fintech.jpg',
              'Banque & Fintech',
              [
                'Mise en place des contrôles trimestriels',
                'Optimisation des processus déclaratifs',
                'Déclarations des comptes annuels format bancaire',
                'Déclaration des reporting ACPR (RUBA, COREP, FINREP…)',
              ]
            )
          }
        >
          Banque & Fintech
        </Cover>
        </Bottom>
      </Card>
      <Link href="/Services">
      <ServiceButton>
        <ButtonWrap>En savoir plus</ButtonWrap>
      </ServiceButton>
      </Link>
    </Container>
  )
}

export default Section2

const Container = styled.div`
  width: 100%; 
  height: auto; 
  display: flex; 
  flex-direction: column; 
  align-items: center;
  color: #1E1E1E;
  padding-top: 50px;
  font-family: poppins;
`;

const WrapSub = styled.div`
  margin-top: 20px;
  height: auto; 
  width: 100%; 
  //background: red;
  //padding-left: 30px;
`;

const SubText = styled.text`
  color: #ffffff; 
  font-size: 16px; 
  font-weight: 300; 
  margin-top: 20px;
  font-style: italic;
`;

const ImageCover = styled.img`
  display: none; /* Hide by default */

  @media(min-width: 800px) {
    display: block; /* Show when screen size is 800px or larger */
    height: 100%; 
    width: auto;
    @media(max-width: 820px) {
      width: 100%; 
      height: auto;
  }
}
`;

const Cover = styled.div`
  height: 50px; 
  width: auto; 
  padding: 10px; 
  border-radius: 100px; 
  border: dashed 1px #ffffff; 
  display: flex; 
  align-items: center; 
  justify-content: center;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    background: #ffffff; 
    color: #1E1E1E;
  }
  @media(max-width: 1037px) {
    text-align:center;
  }
  //@media(max-width: 663px) {
    //width: 200px;
    //background: red;
  //}
  @media(max-width: 560px) {
    font-size: 12px;
  }
`;

const Logo = styled.img`
  height: 40px; 
  width: auto;
  background: transparent;
  @media(max-width: 872px) {
    height: 30px;
  }
  @media(max-width: 613px) {
    height: 20px;
  }
`;

const ServiceButton = styled.div`
  height: 60px; 
  width: 200px; 
  //background: red;
  margin-top: 50px;
  border-radius: 100px;
  border: 1px solid #294979;
  padding: 6px;
  display: flex; 
  align-items: center; 
  justify-content: center;
  cursor: pointer;
`;

const ButtonWrap = styled.div`
  height: 100%; 
  width: 100%; 
  background: #294979;
  border-radius: 100px;
  display: flex; 
  align-items: center; 
  justify-content: center; 
  font-family: poppins; 
  font-size: 20px; 
  font-weight: 300; 
  color: #ffffff;
`;

const Line = styled.div`
  height: auto; 
  width: auto; 
  display: flex; 
  flex-direction: row;
  align-items: center;
`;

const Icon = styled.img`
  height: 20px; 
  width: auto;
`;

const Text = styled.text`
  font-size: 16px; 
  font-weight: 400; 
  margin-left : 10px;
`;

const Panel = styled.div`
  height: 80px; 
  width: 70%;
  //background: red; 
  display: flex; 
  flex-direction: row; 
  align-items: center;
  margin-top: 20px;
  justify-content: space-between;
  @media(max-width: 1130px) {
    width: 830px;
  }
  @media(max-width: 872px) {
    width: 100%;
    padding-left: 20px; 
    padding-right:20px;
  }
  @media(max-width: 613px) {
    padding-left: 10px; 
    padding-right: 10px;
  }
`;

const Card = styled.div`
  height: 600px; 
  width: 80%; 
  background: #294979;
  margin-top: 70px;
  border-radius: 30px;
  display: flex; 
  flex-direction: column;
  padding: 20px;
  //background: red;
  @media(max-width: 689px) {
    width: 100%;
  }
  //@media(max-width: 820px) {
    //height: auto;
  //}
`;

const Body = styled.div`
  height: 90%; 
  width: 100%;
  //background: red;
  display: flex; 
  flex-direction: row;
  @media(max-width: 820px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  height: 100%; 
  width: 60%;
  @media(max-width: 820px) {
    width: 100%;
  }
  //background: red;
`;

const Right = styled.div`
  height: 100%; 
  width: 40%;
  @media(max-width: 820px) {
    width: 100%;
  }
`;

const Bottom = styled.div`
  height: 10%; 
  width: 100%;
  padding-top: 10px; 
  display: flex; 
  flex-direction: row; 
  align-items: center;
  @media(max-width: 663px) {
    overflow-y: scroll;
  }
`;

const TopLeft = styled.div`
  width: 100%; 
  height: 20%; 
`;


const Title = styled.text`
  font-size: 50px; 
  font-weight: 400;
  color: #ffffff;
`; 

const Wrapper = styled.div`
  margin-top: 20px; 
  margin-left: 20px;
  color: #ffffff;
  font-family: poppins;
  font-weight: 300;
`;

const WrapImage = styled.div`
  display: none; /* Hide by default */

@media(min-width: 800px) {
  display: block; /* Show when screen size is 800px or larger */
  height: 100%; 
  width: 100%; 
  background: #1E1E1E;
  border-radius: 20px;
  overflow: hidden;
  @media(max-width: 820px) {
    height: 50%;
    margin-top: 20px;
  }
}
`;