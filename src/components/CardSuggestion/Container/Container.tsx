import { IData } from '../../../interfaces/DataInterface';
import { CardsContainer } from './style';
import Card from '../Card/Card';

const Cards: React.FC<{ data: IData[] }> = ({ data }) => {
  return (
    <CardsContainer>
      {data.map((suggestion) => {
        return <Card key={suggestion.id} {...suggestion} />;
      })}
    </CardsContainer>
  );
};
export default Cards;
