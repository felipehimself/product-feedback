import styled from 'styled-components';
import STYLES from '../constants/styles';

export const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 0 2rem;

  @media screen and (max-width: 1115px) {
    max-width: 90rem;
  }
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  gap: 1rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 1115px) {
    flex-direction: column;
  }
`;

interface IBadge {
  noHover?: boolean;
  noCursor?: boolean;
}

export const Badge = styled.button<IBadge>`
  &.active {
    background: ${STYLES.colors.colorBluePrimary};
    color: ${STYLES.colors.colorwhitePrimary};
  }

  &.active:hover {
    background: ${STYLES.colors.colorBluePrimary};
    color: ${STYLES.colors.colorwhitePrimary};
  }

  cursor: ${(props) => (props.noCursor ? 'auto' : 'pointer')};
  border: none;
  padding: 0.6rem 1.6rem;
  background: ${STYLES.colors.colorwhiteSecondary};
  text-transform: capitalize;
  font-size: 1.3rem;
  color: ${STYLES.colors.colorBluePrimary};
  font-weight: 500;
  border-radius: 1rem;
  transition: background-color 0.2s ease;

  :hover {
    background: ${(props) =>
      props.noHover ? undefined : STYLES.colors.colorGrayTertiary};
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

export const H1 = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${STYLES.colors.colorGraySecondary};
`;

export const H3 = styled.h3`
  font-size: 1.8rem;
  color: ${STYLES.colors.colorGrayPrimary};
  font-weight: 600;
`;

interface IP {
  maxWidth?: string;
  align?: string;
  margin?: string;
}

export const P = styled.p<IP>`
  font-size: 1.6rem;
  color: ${STYLES.colors.colorGrayAccent};
  max-width: ${(props) => props.maxWidth};
  text-align: ${(props)=> props.align};
  margin: ${(props)=> props.margin};

`;
