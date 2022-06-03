import styled from 'styled-components';
import STYLES from '../../constants/styles';

export const Topbar = styled.nav`
  width: 100%;
  background-color: ${STYLES.colors.colorGrayPrimary};
  border-radius: ${STYLES.effects.borderRadius};

  > * {
    color: ${STYLES.colors.colorwhitePrimary};
  }
`;

export const Container = styled.div`
  padding: 1.4rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const ItensContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const H2 = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${STYLES.colors.colorwhitePrimary};
`;
