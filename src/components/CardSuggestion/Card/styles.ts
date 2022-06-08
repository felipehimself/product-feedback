import styled from 'styled-components';
import STYLES from '../../../constants/styles';
import { Link } from 'react-router-dom';
import { Badge } from '../../shared/shared';

export const Card = styled.article`
  background-color: white;
  border-radius: ${STYLES.effects.borderRadius};
  display: grid;
  grid-template-columns: 10% 80% 10%;
  padding: 2.4rem 2rem;

  :not(:last-child) {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 80% 20%;
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

  :first-child {
    @media screen and (max-width: 600px) {
      grid-row: 2 / 3;
      margin-top: 2rem;
    }
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
  justify-self: end;
  gap: 0.5rem;
`;

export const Span = styled.span`
  font-size: 1.3rem;
  color: ${STYLES.colors.colorGrayPrimary};
  font-weight: bold;
`;
