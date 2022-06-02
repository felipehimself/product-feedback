import * as Style from './styles';
import { categories } from '../../utils/data';
import { Badge } from '../../shared/sharedComponents';
import STYLES from '../../constants/styles';
const Navbar = () => {
  return (
    <Style.Nav>
      <Style.Card>
        <Style.CardContainer>
          {categories.map((category) => {
            return <Badge key={category}>{category}</Badge>;
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
            Planned <Style.Span>2</Style.Span>
          </Style.Li>
          <Style.Li color={STYLES.colors.colorPurple}>
            In-Progress <Style.Span>1</Style.Span>
          </Style.Li>
          <Style.Li color={STYLES.colors.colorBluePrimary}>
            Live <Style.Span>3</Style.Span>
          </Style.Li>
        </Style.Ul>
      </Style.Card>
    </Style.Nav>
  );
};
export default Navbar;
