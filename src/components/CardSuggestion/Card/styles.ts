import styled from 'styled-components';
import STYLES from '../../../constants/styles';
import { Link } from 'react-router-dom';
export const Card = styled.article`
  background-color: white;
  border-radius: ${STYLES.effects.borderRadius};
  display: grid;
  grid-template-columns: 18% 62% 20%;
  padding: 1rem 2rem;

  :not(:last-child){
    margin-bottom: 2rem;
  }
`;

export const Item = styled.div`

`

export const Span = styled.span`
  background: ${STYLES.colors.colorwhiteSecondary};
  font-size: 1.3rem;
  color: ${STYLES.colors.colorGrayPrimary};
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Title = styled.div`



`

export const NavLink = styled(Link)`
font-size: 1.8rem;
  color: ${STYLES.colors.colorGrayPrimary};
  font-weight: 600;
  text-decoration: none;

`