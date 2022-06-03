import styled from 'styled-components';
import STYLES from '../../constants/styles';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${STYLES.colors.colorwhitePrimary};
  border-radius: ${STYLES.effects.borderRadius};
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 6rem;
`;
