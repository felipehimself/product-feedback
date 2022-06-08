import styled from 'styled-components';
import STYLES from '../../constants/styles';
import { Link } from 'react-router-dom';

export const NavigateLink = styled(Link)`
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${STYLES.colors.colorGrayAccent};

  :hover {
    text-decoration: underline;
  }

  &.white {
    color: #fff;
  }
`;
