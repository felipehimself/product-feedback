import Header from '../components/Header/Header';
import { FlexContainer, Main, Container } from '../shared/sharedComponents';
import Topbar from '../components/Topbar/Topbar';
import CardsContainer from '../components/CardSuggestion/Container/Container';

import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

import { handleData } from '../utils/functions';
const Home = () => {
  const { data } = useSelector((state: RootState) => state.data);
  const { termToFilter } = useSelector((state: RootState) => state.filterTerm);

  return (
    <Container>
      <FlexContainer>
        <Header />
        <Main>
          <Topbar />
          <CardsContainer data={handleData(data, termToFilter)} />
        </Main>
      </FlexContainer>
    </Container>
  );
};
export default Home;
