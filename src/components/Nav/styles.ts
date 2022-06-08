import styled from 'styled-components';
import STYLES from '../../constants/styles';
import { Link } from 'react-router-dom';

import backgroundSmall from './../../assets/images/background.png';

export const Nav = styled.nav`
  background-color: ${STYLES.colors.colorwhiteSecondary};
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (max-width: 1115px) {
    flex-direction: row;

    > * {
      flex: 1;
    }
  }
`;

export const LogoContainer = styled.div`
  height: 16.6rem;
  width: 25.5rem;
  border-radius: ${STYLES.effects.borderRadius};
  background-image: url(${backgroundSmall});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 9999;

  @media screen and (max-width: 850px) {
    height: 8rem;
    justify-content: center;
    border-radius: 0;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
  }
`;

export const ItensContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${STYLES.colors.colorwhiteSecondary};
  transition: all 0.3s ease;
  
  @media screen and (max-width: 1115px) {
    flex-direction: row;

    > * {
      flex: 1;
    }
  }

  @media screen and (max-width: 850px) {
    flex-direction: column;
    position: fixed;
    right: -100%;
    top: 8rem;
    padding: 2rem 2rem;
    min-height: 100vh;
    justify-content: flex-start;
    z-index: 100;
    align-items: center;
    justify-content: flex-start;

    &.active{
      right: 0;
    }


  }

  
`;

export const Hamburguer = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  position: fixed;
  top: 3rem;
  right: 2rem;
  display: none;
  cursor: pointer;
  z-index: 10000;

  @media screen and (max-width: 850px) {
    display: block;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${STYLES.colors.colorwhitePrimary};
  font-weight: 500;
  padding-left: 1.8rem;
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${STYLES.colors.colorwhitePrimary};
  padding-left: 1.8rem;
  padding-bottom: 1.8rem;

  @media screen and (max-width: 850px) {
    padding-bottom: 0;
  }
`;

export const Card = styled.div`
  background-color: ${STYLES.colors.colorwhitePrimary};
  min-height: 16.6rem;
  width: 25.5rem;
  border-radius: ${STYLES.effects.borderRadius};

  @media screen and (max-width: 850px) {
    max-height: 16.6rem;
  }
`;

export const CardContainer = styled.div`
  padding: 2.4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem;
`;

export const CardTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: -0.5rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.8rem;
  color: ${STYLES.colors.colorGrayPrimary};
  font-weight: 600;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.3rem;
  color: ${STYLES.colors.colorBluePrimary};
  font-weight: bold;

  :hover {
    text-decoration: underline;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  margin-top: -1rem;
  padding: 0 2.4rem;
`;

interface IStyle {
  color?: string;
}

export const Li = styled.li<IStyle>`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  color: ${STYLES.colors.colorGrayAccent};
  :not(:last-child) {
    margin-bottom: 0.6rem;
  }
  ::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    margin-right: 1.2rem;
    background-color: ${(props) => props.color};
  }
`;

export const Span = styled.span`
  font-size: 1.6rem;
  color: ${STYLES.colors.colorGrayAccent};
  font-weight: 700;
  margin-left: auto;
`;
