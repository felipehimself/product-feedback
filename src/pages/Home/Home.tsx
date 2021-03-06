import { useState, useEffect } from 'react';
import { FlexContainer, Main, Container } from '../../components/shared/shared';
import Topbar from '../../components/Topbar/Topbar';
import CardsContainer from '../../components/CardSuggestion/Container/Container';
import NoFeedBack from '../../components/NoFeedBack/NoFeedBack';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Navbar from '../../components/Nav/Navbar';
import { handleData } from '../../utils/functions';

const Home = () => {
  const { data } = useSelector((state: RootState) => state.data);
  const { termToFilter } = useSelector((state: RootState) => state.filterTerm);

  const [dataToDisplay, setDataToDisplay] = useState(data);

  useEffect(() => {
    setDataToDisplay(handleData(data, termToFilter));
  }, [data, termToFilter]);

  return (
    <Container>
      <FlexContainer>
        <Navbar />
        <Main>
          <Topbar />
          {dataToDisplay.length !== 0 ? (
            <CardsContainer data={dataToDisplay} />
          ) : (
            <NoFeedBack />
          )}
        </Main>
      </FlexContainer>
    </Container>
  );
};
export default Home;
