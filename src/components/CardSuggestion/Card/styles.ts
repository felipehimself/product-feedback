import styled from 'styled-components';
import STYLES from '../../../constants/styles';
import { Link } from 'react-router-dom';
import { Badge } from '../../../shared/sharedComponents';
export const Card = styled.article`
  background-color: white;
  border-radius: ${STYLES.effects.borderRadius};
  display: grid;
  grid-template-columns: 10% 85% 5%;
  padding: 2.4rem 2rem;

  :not(:last-child) {
    margin-bottom: 2rem;
  }
`;

interface IItem {
  display?: string;
  direction?: string;
}

export const Item = styled.div<IItem>`
  display: ${(props) => props.display || undefined};
  flex-direction: ${(props) => props.direction || undefined};
  gap: 0.5rem;
  align-items: flex-start;

  ${Badge} {
    margin-top: 0.8rem;
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  background: ${STYLES.colors.colorwhiteSecondary};
  font-size: 1.3rem;
  color: ${STYLES.colors.colorGrayPrimary};
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  :hover {
    background: ${STYLES.colors.colorGrayTertiary};
  }
`;

export const NavLink = styled(Link)`
  font-size: 1.8rem;
  color: ${STYLES.colors.colorGrayPrimary};
  font-weight: 600;
  text-decoration: none;

  :hover {
    color: ${STYLES.colors.colorBluePrimary};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  gap: 0.5rem;
`;

export const Span = styled.span`
  font-size: 1.3rem;
  color: ${STYLES.colors.colorGrayPrimary};
  font-weight: bold;
`;
