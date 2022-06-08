import styled from 'styled-components';
import STYLES from '../../constants/styles';

export const PageContainer = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 0 2rem;

  @media screen and (max-width: 950px) {
    padding: 0;
  }
`;

export const PageHeader = styled.header`
  background-color: ${STYLES.colors.colorGrayPrimary};
  border-radius: ${STYLES.effects.borderRadius};
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > * {
    color: ${STYLES.colors.colorwhitePrimary};
  }

  @media screen and (max-width: 950px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border-radius: 0;
  }
`;

export const StatusMenu = styled.nav`
  display: flex;
  margin-bottom: 2rem;
  
  > * {
    flex: 1;
  }

  @media screen and (max-width: 950px) {
    margin-top: 8rem;
    align-items: center;
    padding: 1rem 0;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  > * {
    color: ${STYLES.colors.colorwhitePrimary};
  }
`;

export const StatusContainer = styled.div`
  display: flex;
  width: 100%;

  justify-content: center;
  gap: 1.4rem;

  > * {
    flex: 1;
  }

  @media screen and (max-width: 850px) {
    margin-top: 2rem;
  }
`;

interface IStatus {
  borderColor?: string;
}
export const Status = styled.button<IStatus>`
  font-size: 1.8rem;
  color: ${STYLES.colors.colorGrayPrimary};
  background-color: transparent;
  border: none;
  padding: 1rem;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid rgba(0, 0, 0, 0.16);

  &.active {
    border-bottom: 2px solid ${(props) => props.borderColor};
  }

  @media screen and (max-width: 950px) {
    display: grid;
    place-items: center;
    cursor: pointer;
  }
`;

export const Label = styled.label`
  font-size: 1.6rem;
  color: ${STYLES.colors.colorGrayAccent};
  font-weight: normal !important;
  

  @media screen and (max-width: 950px) {
    display: none;
  }
`;

export const StatusItem = styled.div`
  &.active {
    display: block;
    
  }

  &.disabled {
    display: none;
  }
`;

interface ICard {
  borderColor: string;
}

export const Card = styled.article<ICard>`
  padding: 2rem;
  background-color: ${STYLES.colors.colorwhitePrimary};
  border-top: 0.5rem solid ${(props) => props.borderColor};
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  min-height: 25.5rem;
  margin: 0 auto;

  :not(:last-child) {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 950px) {
    max-width: 35.5rem;
  }
`;

export const CardHeader = styled.header<ICard>`
  font-size: 1.3rem;
  color: ${STYLES.colors.colorGrayAccent};
  display: flex;
  align-items: center;
  gap: 1rem;

  ::before {
    content: '';
    display: block;
    background-color: ${(props) => props.borderColor};
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 100%;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  background: ${STYLES.colors.colorwhiteSecondary};
  font-size: 1.3rem;
  color: ${STYLES.colors.colorGrayPrimary};
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  min-width: 5rem;
  padding: 0.8rem 1rem;
  border-radius: 1rem;

  transition: background-color 0.2s ease;

  :hover {
    background: ${STYLES.colors.colorGrayTertiary};
  }

  @media screen and (max-width: 950px) {
    cursor: pointer;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
export const Span = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${STYLES.colors.colorGrayPrimary};
`;
