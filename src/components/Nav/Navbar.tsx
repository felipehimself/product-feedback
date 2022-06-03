import * as Style from './styles';
import { categories } from '../../utils/data';
import { Badge } from '../../shared/sharedComponents';
import STYLES from '../../constants/styles';

import { useDispatch } from 'react-redux';
import { changeTerm } from '../../store/slices/filterListSlice';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Navbar = () => {
  const dispatch = useDispatch();

  const { termToFilter } = useSelector((state: RootState) => state.filterTerm);
  const { data } = useSelector((state: RootState) => state.data);

  const plannedAmount = data.filter((item) => item.status === 'planned').length;
  const inProgressAmount = data.filter(
    (item) => item.status === 'in-progress'
  ).length;
  const liveAmount = data.filter((item) => item.status === 'live').length;

  console.log(data);
  return (
    <Style.Nav>
      <Style.LogoContainer>
        <Style.H1>Frontend Mentor</Style.H1>
        <Style.P>Feedback Board</Style.P>
      </Style.LogoContainer>
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
            <Style.H3>Roadmap</Style.H3>
            <Style.NavLink to='/'>View</Style.NavLink>
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
    </Style.Nav>
  );
};
export default Navbar;
