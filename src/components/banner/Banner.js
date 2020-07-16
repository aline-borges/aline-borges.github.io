import React from 'react';
import { BannerContainer, BannerImage, BoxImage, Button } from './style';
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';
import codewars from '../../assets/images/codewars.png';
import codepen from '../../assets/images/codepen.png';
import behance from '../../assets/images/behance.png';


const Banner = (props) => {
  return(
    <BannerContainer>
      <BoxImage bgColor='#0F1923' bgHover='#1B4C96'>
        <BannerImage src={linkedin}  />
        <Button hoverColor='#1B4C96'>Linkedin</Button>
      </BoxImage>
      <BoxImage bgColor='#0F1923' bgHover='#1F2626'>
        <BannerImage src={github}  />
        <Button hoverColor='#1F2626'>GitHub</Button>
      </BoxImage>
      <BoxImage bgColor='#0F1923' bgHover='#701111'>
        <BannerImage src={codewars}  />
        <Button hoverColor='#701111'>CodeWars</Button>
      </BoxImage>
      <BoxImage bgColor='#0F1923' bgHover='#469621'>
        <BannerImage src={codepen}  />
        <Button hoverColor='#469621'>CodePen</Button>
      </BoxImage>
      <BoxImage bgColor='#0F1923' bgHover='#0E7D96'>
        <BannerImage src={behance}  />
        <Button hoverColor='#119FBF' decoration='#119FBF'>Behance</Button>
      </BoxImage>
    </BannerContainer>
  );
}

export default Banner 
