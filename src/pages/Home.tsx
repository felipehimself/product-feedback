import Header from '../components/Header/Header';
import { FlexContainer, Main, Container } from '../shared/sharedComponents';
import Topbar from '../components/Topbar/Topbar';


const Home = () => {
  return (
    <Container>
      <FlexContainer>
        <Header />
        <Main>
          <Topbar/>
        </Main>
      </FlexContainer>
    </Container>
  );
};
export default Home;
