import * as Style from './styles';
import { FlexContainer } from '../../shared/sharedComponents';
import Navbar from '../Nav/Navbar';

const Header = () => {
  return (
    <Style.Header>
      <Style.HeaderContainer >
        <Style.LogoContainer>
          <Style.H1>Frontend Mentor</Style.H1>
          <Style.P>Feedback Board</Style.P>
        </Style.LogoContainer>
        <Navbar />
      </Style.HeaderContainer>
    </Style.Header>
  );
};
export default Header;
