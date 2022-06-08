import styled from 'styled-components';
import STYLES from '../../constants/styles';

interface IButton {
  direction: string;
}

export const Button = styled.button<IButton>`
  border: none;
  outline: none;
  background: ${STYLES.colors.colorwhiteSecondary};
  font-size: 1.3rem;
  color: ${STYLES.colors.colorGrayPrimary};
  font-weight: bold;
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  min-width: 4.2rem;

  :hover {
    background: ${STYLES.colors.colorGrayTertiary};
  }
`;
