import { useState } from 'react';
import * as Style from './styles';
import { categories } from '../../utils/data';
import { Badge } from '../shared/shared';
import STYLES from '../../constants/styles';

import { useDispatch } from 'react-redux';
import { changeTerm } from '../../store/slices/filterListSlice';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import HamburguerIcon from '../Svgs/HamburguerIcon';
import CloseIcon from '../Svgs/CloseIcon';

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const dispatch = useDispatch();

  const { termToFilter } = useSelector((state: RootState) => state.filterTerm);
  const { data } = useSelector((state: RootState) => state.data);

  const plannedAmount = data.filter((item) => item.status === 'planned').length;
  const inProgressAmount = data.filter(
    (item) => item.status === 'in-progress'
  ).length;
  const liveAmount = data.filter((item) => item.status === 'live').length;

  return (
    <Style.Nav>
      <Style.Hamburguer onClick={() => setIsOpenMenu((prev) => !prev)}>
        {isOpenMenu ? <CloseIcon /> : <HamburguerIcon />}
      </Style.Hamburguer>
      <Style.LogoContainer>
        <Style.Title>Frontend Mentor</Style.Title>
        <Style.Subtitle>Feedback Board</Style.Subtitle>
      </Style.LogoContainer>
      <Style.ItensContainer className={isOpenMenu ? 'active' : undefined}>
        <Style.Card>
          <Style.CardContainer>
            {categories.map((category) => {
              return (
                <Badge
                  onClick={() => dispatch(changeTerm(category))}
                  key={category}
                  className={termToFilter === category ? 'active' : undefined}
                >
                  {category}
                </Badge>
              );
            })}
          </Style.CardContainer>
        </Style.Card>
        <Style.Card>
          <Style.CardContainer>
            <Style.CardTitleContainer>
              <Style.CardTitle>Roadmap</Style.CardTitle>
              <Style.NavLink to='/roadmap'>View</Style.NavLink>
            </Style.CardTitleContainer>
          </Style.CardContainer>
          <Style.Ul>
            <Style.Li color={STYLES.colors.colorOrange}>
              Planned <Style.Span>{plannedAmount}</Style.Span>
            </Style.Li>
            <Style.Li color={STYLES.colors.colorPurple}>
              In-Progress <Style.Span>{inProgressAmount}</Style.Span>
            </Style.Li>
            <Style.Li color={STYLES.colors.colorBluePrimary}>
              Live <Style.Span>{liveAmount}</Style.Span>
            </Style.Li>
          </Style.Ul>
        </Style.Card>
      </Style.ItensContainer>
    </Style.Nav>
  );
};
export default Navbar;
