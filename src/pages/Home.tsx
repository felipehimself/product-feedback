import Header from '../components/Header/Header';
import { FlexContainer, Main, Container } from '../shared/sharedComponents';
import Topbar from '../components/Topbar/Topbar';
import List from '../components/CardSuggestion/Container/Container';

import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Home = () => {
  const { data } = useSelector((state: RootState) => state.data);
  
  return (
    <Container>
      <FlexContainer>
        <Header />
        <Main>
          <Topbar />
          <List data={data}/>
        </Main>
      </FlexContainer>
    </Container>
  );
};
export default Home;
