import styled from 'styled-components';
import STYLES from '../../constants/styles';

export const Topbar = styled.nav`
  width: 100%;
  background-color: ${STYLES.colors.colorGrayPrimary};
  border-radius: ${STYLES.effects.borderRadius};

  > * {
    color: ${STYLES.colors.colorwhitePrimary};
  }

  @media screen and (max-width: 850px) {
    position: fixed;
    top: 8rem;
    right: 0;
    left: 0;
    border-radius: 0;
  }
`;

export const Container = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-right: 4rem;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const ItensContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${STYLES.colors.colorwhitePrimary};
`;
