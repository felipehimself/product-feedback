import ArrowUpIcon from '../Svgs/ArrowUpIcon';
import * as Style from './style';

const Upvote: React.FC<{
  onClick: () => void;
  votes: number;
  direction: string;
}> = ({ onClick, votes, direction }) => {
  return (
    <Style.Button direction={direction} onClick={onClick}>
      <ArrowUpIcon />
      {votes}
    </Style.Button>
  );
};
export default Upvote;
