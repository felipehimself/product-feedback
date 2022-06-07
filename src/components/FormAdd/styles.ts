import styled from 'styled-components';
import STYLES from '../../constants/styles';
import { Link } from 'react-router-dom';

export const FormContainer = styled.div`
  max-width: 58rem;
  padding: 0 2rem;
  margin: 2rem auto;
`;

export const FormHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Navigate = styled(Link)`
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${STYLES.colors.colorGrayAccent};

  :hover {
    text-decoration: underline;
  }
`;

export const Form = styled.form`
  margin-top: 4rem;
  background-color: ${STYLES.colors.colorwhitePrimary};
  border-radius: ${STYLES.effects.borderRadius};
  padding: 2rem 3rem;
  padding-bottom: 3rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  ::after {
    content: '+';
    position: absolute;
    display: grid;
    place-items: center;
    background: linear-gradient(-140deg, #e84d70, #a337f6 50%, #28a7ed);
    color: ${STYLES.colors.colorwhitePrimary};
    padding-bottom: 3px;
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
    font-size: 2rem;
    top: -2rem;
  }

  h1 {
    margin-top: 1rem;
  }
`;

interface IFormControl {
  align?: string;
  direction?: string;
  justify?: string;
  gap?: string;
  margin?: string;
}

export const FormControl = styled.div<IFormControl>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'column'};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margin};
`;

export const Label = styled.label`
  font-size: 1.4rem;
  color: ${STYLES.colors.colorGraySecondary};
  font-weight: 700;
`;

export const Span = styled.span`
  font-size: 1.4rem;
  color: ${STYLES.colors.colorGrayAccent};
  margin-top: 0.4rem;
  position: relative;
`;

export const Input = styled.input`
  border: none;
  background-color: ${STYLES.colors.colorwhiteSecondary};
  border-radius: ${STYLES.effects.borderRadius};
  padding: 1.2rem 2rem;
  margin-top: 1rem;
  font-size: 1.4rem;
  border: 1px solid transparent;
  :focus {
    outline: none;
    border: 1px solid ${STYLES.colors.colorPurple};
  }
`;

export const Textarea = styled.textarea`
  border: none;
  background-color: ${STYLES.colors.colorwhiteSecondary};
  border-radius: ${STYLES.effects.borderRadius};
  resize: none;
  border: 1px solid transparent;
  height: 12rem;
  margin-top: 1rem;
  padding: 1.2rem 2rem;

  :focus {
    outline: none;
    border: 1px solid ${STYLES.colors.colorPurple};
  }
`;

export const Title = styled.p`
  position: relative;
`;

export const SelectedContainer = styled.div`
  position: relative;
`;

export const Selected = styled.button`
  background-color: ${STYLES.colors.colorwhiteSecondary};
  border-radius: ${STYLES.effects.borderRadius};
  padding: 1.4rem 2rem;
  margin-top: 1rem;
  border: 1px solid transparent;
  font-size: 1.4rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: ${STYLES.colors.colorGrayAccent};
  cursor: pointer;
  text-transform: capitalize;

  :focus {
    outline: none;
    border: 1px solid ${STYLES.colors.colorPurple};
  }
`;

export const Ul = styled.ul`
  list-style: none;
  position: absolute;
  top: 6rem;
  background-color: ${STYLES.colors.colorwhitePrimary};
  border-radius: ${STYLES.effects.borderRadius};
  box-shadow: 0 10px 40px -7px rgb(55 63 104 / 35%);
  width: 100%;
  z-index: 100;
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


export const P = styled.p`
  font-size: 1.5rem;
  color: #40c057;
  text-align: center;
  min-height: 2.2rem;
  font-weight: 700;

  &.error {
    color: #d73737;
  }

`
