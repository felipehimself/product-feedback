import * as Style from './styles';
import { IData } from '../../../interfaces/DataInterface';
import { P } from '../../shared/shared';
import { Badge } from '../../shared/shared';
import CommentIcon from '../../Svgs/CommentIcon';
import { incrementVote } from '../../../store/slices/dataSlice';
import { useDispatch } from 'react-redux';
import Upvote from '../../Upvote/Upvote';

const Card: React.FC<IData> = ({
  category,
  comments,
  detail,
  id,
  title,
  votes,
}) => {
  const dispatch = useDispatch();

  return (
    <Style.Card>
      <Style.Item>
        <Upvote
          direction='column'
          votes={votes}
          onClick={() => dispatch(incrementVote(id))}
        />
      </Style.Item>
      <Style.Item display='flex' direction='column'>
        <Style.NavLink to={`/feedback-details/${id}`}>{title}</Style.NavLink>
        <P>{detail}</P>
        <Badge noHover noCursor>
          {category}
        </Badge>
      </Style.Item>
      <Style.IconContainer>
        <CommentIcon />
        <Style.Span>
          {comments.length +
            comments.reduce((acc, curr) => acc + curr.replies.length, 0)}
        </Style.Span>
      </Style.IconContainer>
    </Style.Card>
  );
};
export default Card;
