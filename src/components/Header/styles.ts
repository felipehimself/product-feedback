import styled from 'styled-components';
import STYLES from '../../constants/styles';
import backgroundSmall from './../../assets/images/background.png';

export const Header = styled.header``;

export const LogoContainer = styled.div`
  height: 13.7rem;
  max-width: 25.5rem;
  border-radius: ${STYLES.effects.borderRadius};
  background-image: url(${backgroundSmall});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const H1 = styled.h1`
  font-size: 2rem;
  color: ${STYLES.colors.colorwhitePrimary};
  font-weight: 500;
  padding-left: 1.8rem;
`;

export const P = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${STYLES.colors.colorwhitePrimary};
  padding-left: 1.8rem;
  padding-bottom: 1.8rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
