import React from 'react';
import { HeaderContainer, Banner, Avatar, Username, Name, Menu, Item, Place, Company, Box } from './style';
import avatar from '../../assets/images/aline.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUserCheck, faStar, faCodeBranch, faMapMarkerAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
  return(
    <HeaderContainer>
      <Banner />
      <Avatar src={avatar} alt='avatar-profile' />
      <Username>@aline-borges</Username>
      <Name>Aline Borges</Name>
      <Menu>
        <Item>
          <FontAwesomeIcon icon={faUserPlus} pull="left" style={{ color: '#8e44ad'}} /> 
          01
          Following
        </Item>
        <Item>
          <FontAwesomeIcon icon={faUserCheck} pull="left" style={{ color: '#8e44ad'}} />
          01 
          Followers
        </Item>
        <Item>
          <FontAwesomeIcon icon={faCodeBranch} pull="left" style={{ color: '#8e44ad'}} />
          15 
          Repositories
        </Item>
        <Item>
          <FontAwesomeIcon icon={faStar} pull="left" style={{ color: '#8e44ad'}} />
          5 
          Stars
        </Item>
      </Menu>
      <Box>
        <Place>
          <FontAwesomeIcon icon={faMapMarkerAlt} pull="left" style={{ color: ' #ffffff'}} />
          Rio de Janeiro, Brazil
        </Place>
        <Company>
          <FontAwesomeIcon icon={faBriefcase} pull="left" style={{ color: ' #ffffff'}} />
          FGV
        </Company>
      </Box>
    </HeaderContainer>
  );
}

export default Header 
