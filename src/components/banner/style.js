import styled from 'styled-components';

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BoxImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
  min-width: 270px;
  background: ${props => props.bgColor};

    &:hover {
      background: ${props => props.bgHover};
    }
`;

export const BannerImage = styled.img`
  min-width: 145px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  letter-spacing: 2px;
  color: #ece8e1;
  background: transparent;
  font: 900 14px 'Roboto', sans-serif;
  text-align: center;
  text-transform: uppercase;  
  border: 1px solid #ffffff;
  border-radius: 5px;
  padding: 8px 16px;
  min-width: 150px;
  cursor: pointer;

    &:hover {
      background: #ffffff;
      color: ${props => props.hoverColor};
      border-bottom: 1px solid ${props => props.decoration};
    }
`;