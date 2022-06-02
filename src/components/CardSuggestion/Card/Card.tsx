import * as Style from './styles';
import { IData } from '../../../interfaces/DataInterface';
import { H3, P } from '../../../shared/sharedComponents';

const Card: React.FC<IData> = ({
  category,
  comments,
  detail,
  id,
  title,
  votes,
}) => {
  return (
    <Style.Card>
      <Style.Item>
        <Style.Span>
          <svg width='10' height='7' xmlns='http://www.w3.org/2000/svg'>
            <path
              className='up-arrow'
              d='M1 6l4-4 4 4'
              stroke='#4661E6'
              strokeWidth='2'
              fill='none'
              fillRule='evenodd'
            ></path>
          </svg>
          {votes}
        </Style.Span>
      </Style.Item>
      <Style.Item>
        <Style.NavLink to='/'>{title}</Style.NavLink>
        <P>{detail}</P>
      </Style.Item>
      <Style.Item>
        <Style.Span> {votes}</Style.Span>
      </Style.Item>
    </Style.Card>
  );
};
export default Card;
