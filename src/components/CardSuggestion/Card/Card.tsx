import * as Style from './styles';
import { IData } from '../../../interfaces/DataInterface';
import { P } from '../../../shared/sharedComponents';
import { Badge } from '../../../shared/sharedComponents';
import ArrowUpIcon from '../../Svgs/ArrowUpIcon';
import CommentIcon from '../../Svgs/CommentIcon';
import { incrementVote } from '../../../store/slices/dataSlice';
import { useDispatch } from 'react-redux';

const Card: React.FC<IData> = ({ category, comments, detail, id, title, votes }) => {

  const dispatch = useDispatch();

  return (
    <Style.Card>
      <Style.Item>
        <Style.Button onClick={()=> dispatch(incrementVote(id))}>
          <ArrowUpIcon />
          {votes}
        </Style.Button>
      </Style.Item>
      <Style.Item display='flex' direction='column'>
        <Style.NavLink to='/'>{title}</Style.NavLink>
        <P>{detail}</P>
        <Badge noHover>{category}</Badge>
      </Style.Item>
      <Style.IconContainer>
        <CommentIcon />
        <Style.Span>
          {(comments.length) + (comments.reduce((acc, curr) => acc + curr.replies.length, 0))}
        </Style.Span>
      </Style.IconContainer>
    </Style.Card>
  );
};
export default Card;
