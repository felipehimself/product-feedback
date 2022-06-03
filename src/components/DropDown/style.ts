import styled from 'styled-components';
import STYLES from '../../constants/styles';

export const Container = styled.div`
  flex: 1;
  position: relative;
  margin-left: 4rem;
`;

interface ISpan {
  weight?: string;
  capitalize?: string;
}

export const Span = styled.span<ISpan>`
  font-size: 1.4rem;
  font-weight: ${(props) => props.weight};
  letter-spacing: 1px;
  color: ${STYLES.colors.colorwhitePrimary};
  text-transform: ${(props) => props.capitalize};
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

export const Ul = styled.ul`
  list-style: none;
  position: absolute;
  top: 3rem;
  background-color: ${STYLES.colors.colorwhitePrimary};
  border-radius: ${STYLES.effects.borderRadius};
  box-shadow: 0 10px 40px -7px rgb(55 63 104 / 35%);
  width: 60%;
  
`;

export const ButtonItem = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.6rem;
  text-transform: capitalize;
  color: ${STYLES.colors.colorGrayAccent};
  cursor: pointer;
  padding: 1.2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  :hover {
    color: ${STYLES.colors.colorPurple};
  }

  &.active {
    color: ${STYLES.colors.colorPurple};
  }
`;

export const Li = styled.li`
  :not(:last-child) {
    border-bottom: 1px solid rgba(58, 67, 116, 0.15);
  }
`;
