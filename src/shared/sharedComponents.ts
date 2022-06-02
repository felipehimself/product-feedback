import styled from 'styled-components';
import STYLES from '../constants/styles';

export const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  margin-top: 2rem;
`;

export const Main = styled.main`
  flex: 1;
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Badge = styled.button`
  cursor: pointer;
  border: none;
  padding: 0.6rem 1.6rem;
  background: ${STYLES.colors.colorwhiteSecondary};
  text-transform: capitalize;
  font-size: 1.3rem;
  color: ${STYLES.colors.colorBluePrimary};
  font-weight: 500;
  border-radius: 1rem;
  transition: all 0.2s ease;

  :hover {
    background: ${STYLES.colors.colorGrayTertiary};
  }
`;

interface IButton {
  bgColor: string;
}

export const Button = styled.button<IButton>`
  font-size: 1.4rem;
  border: none;
  font-weight: 500;
  background-color: ${(props) => props.bgColor};
  padding: 1.2rem 2rem;
  color: ${STYLES.colors.colorwhitePrimary};
  cursor: pointer;
  border-radius: ${STYLES.effects.borderRadius};
  transition: all 0.2s ease;

  :hover {
    opacity: 0.6;
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const H3 = styled.h3`
  font-size: 1.8rem;
  color: ${STYLES.colors.colorGrayPrimary};
  font-weight: 600;
`;

export const P = styled.p`
  font-size: 1.6rem;
  color: ${STYLES.colors.colorGrayAccent};
`;
