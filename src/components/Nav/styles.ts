import styled from 'styled-components';
import STYLES from '../../constants/styles';
import { Link } from 'react-router-dom';


export const Nav = styled.nav`
  background-color: ${STYLES.colors.colorwhiteSecondary};
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Card = styled.div`
  background-color: ${STYLES.colors.colorwhitePrimary};
  min-height: 16.6rem;
  width: 25.5rem;
  border-radius: ${STYLES.effects.borderRadius};
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

export const H3 = styled.h3`
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
  /* justify-content: space-between; */
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
