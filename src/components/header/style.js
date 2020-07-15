import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Banner = styled.div`
  min-height: 150px;
  min-width: 2000px;
  background: #8e44ad;
`;

export const Avatar = styled.img`
  border-radius: 100%;
  width: 100px;
  position: absolute;
  bottom: 65%;
`;

export const Username = styled.h2`
  font: 500 14px 'Roboto', sans-serif;
  text-transform: lowercase;
  letter-spacing: 1px;
  color: #ffffff;
  position: absolute;
  bottom: 60%;
`

export const Name = styled.h1`
  font: 300 36px 'Montserrat', sans-serif;
  text-transform: uppercase;
  color: #8e44ad;
  position: absolute;
  bottom: 52%;
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 48%;
`;

export const Item = styled.li`
  font: 300 14px 'Roboto', sans-serif;
  margin: 0 5px;
  padding: 0 5px;
  text-transform: uppercase;
`;

export const Place = styled.p`
  font: 500 14px 'Quicksand', sans-serif;
  color: #8e44ad;
  position: absolute;
  bottom: 44%;
`;

export const Company = styled(Place)`
  bottom: 41%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;