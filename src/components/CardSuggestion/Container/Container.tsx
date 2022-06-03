import { IData } from '../../../interfaces/DataInterface';
import { Container } from './style';
import Card from '../Card/Card';

const Cards: React.FC<{ data: IData[] }> = ({ data }) => {
  return (
    <Container>
      {data.map((suggestion) => {
        return <Card key={suggestion.id} {...suggestion} />;
      })}
    </Container>
  );
};
export default Cards;
