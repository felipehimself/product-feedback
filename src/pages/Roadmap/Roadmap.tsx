import { useState, useEffect } from 'react';
import * as Style from './styles';
import { H1, H2, P, Badge } from '../../components/shared/shared';
import { Navigate } from '../../components/shared/shared';
import Goback from '../../components/GoBack/Goback';
import CommentIcon from '../../components/Svgs/CommentIcon';
import STYLES from '../../constants/styles';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { incrementVote } from '../../store/slices/dataSlice';
import Upvote from '../../components/Upvote/Upvote';

const Roadmap = () => {
  const { data } = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState([
    'planned',
    'in-progress',
    'live',
  ]);
  
  const [width, setWidth] = useState<number | null>(null);
  const plannedAmount = data.filter((item)=> item.status === 'planned').length
  const inProgressAmount = data.filter((item)=> item.status === 'in-progress').length
  const liveAmount = data.filter((item)=> item.status === 'live').length


  useEffect(() => {
    setWidth(window.innerWidth);
    if (window.innerWidth <= 950) {
      setActiveTab(['planned']);
    }
  }, []);


  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);

      if (window.innerWidth <= 950) {
        setActiveTab(['planned']);
      } else {
        setActiveTab(['planned', 'in-progress', 'live']);
      }

      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  const handleGetTab = (status: string[]) => {
    if (width === null) return;

    if (width! <= 950) {
      setActiveTab(status);
    }
  };

  return (
    <Style.PageContainer>
      <Style.PageHeader>
        <Style.FlexContainer>
          <Goback color='#fff' txtColor='#fff' to='/' />
          <H1>Roadmap</H1>
        </Style.FlexContainer>
        <Navigate to='/add-feedback'>+ Add feedback</Navigate>
      </Style.PageHeader>

      <Style.StatusMenu>
        <Style.Status borderColor={STYLES.colors.colorOrange} className={width! <= 950 && activeTab.includes('planned') ? 'active' : undefined } onClick={() => handleGetTab(['planned'])}>
          Planned ({plannedAmount}) <Style.Label>Ideas prioritized for research</Style.Label>
        </Style.Status>
        <Style.Status borderColor={STYLES.colors.colorPurple} className={width! <= 950 && activeTab.includes('in-progress') ? 'active' : undefined } onClick={() => handleGetTab(['in-progress'])}>
          In-Progress ({inProgressAmount}) <Style.Label>Currently being developed</Style.Label>
        </Style.Status>
        <Style.Status borderColor={STYLES.colors.colorBlueSecondary} className={width! <= 950 && activeTab.includes('live') ? 'active' : undefined } onClick={() => handleGetTab(['live'])}>
          Live ({liveAmount})<Style.Label>Released features</Style.Label>
        </Style.Status>
      </Style.StatusMenu>

      <Style.StatusContainer>
        <Style.StatusItem
          className={activeTab.includes('planned') ? 'active' : 'disabled'}
        >
          {data
            .filter((item) => item.status === 'planned')
            .map((item) => {
              return (
                <Style.Card
                  key={item.id}
                  borderColor={STYLES.colors.colorOrange}
                >
                  <Style.CardHeader borderColor={STYLES.colors.colorOrange}>
                    Planned
                  </Style.CardHeader>
                  <H2>{item.title}</H2>
                  <P>{item.detail}</P>
                  <Badge>{item.category}</Badge>
                  <Style.Flex>
                    <Upvote
                      direction='row'
                      votes={item.votes}
                      onClick={() => dispatch(incrementVote(item.id))}
                    />

                    <Style.Footer>
                      <CommentIcon />
                      <Style.Span>
                        {item.comments.length +
                          item.comments.reduce(
                            (acc, curr) => acc + curr.replies.length,
                            0
                          )}
                      </Style.Span>
                    </Style.Footer>
                  </Style.Flex>
                </Style.Card>
              );
            })}
        </Style.StatusItem>

        <Style.StatusItem
          className={activeTab.includes('in-progress') ? 'active' : 'disabled'}
        >
          {data
            .filter((item) => item.status === 'in-progress')
            .map((item) => {
              return (
                <Style.Card
                  key={item.title}
                  borderColor={STYLES.colors.colorPurple}
                >
                  <Style.CardHeader borderColor={STYLES.colors.colorPurple}>
                    In-Progress
                  </Style.CardHeader>
                  <H2>{item.title}</H2>
                  <P>{item.detail}</P>
                  <Badge>{item.category}</Badge>
                  <Style.Flex>
                    <Upvote
                      direction='row'
                      votes={item.votes}
                      onClick={() => dispatch(incrementVote(item.id))}
                    />
                    <Style.Footer>
                      <CommentIcon />
                      <Style.Span>
                        {item.comments.length +
                          item.comments.reduce(
                            (acc, curr) => acc + curr.replies.length,
                            0
                          )}
                      </Style.Span>
                    </Style.Footer>
                  </Style.Flex>
                </Style.Card>
              );
            })}
        </Style.StatusItem>

        <Style.StatusItem
          className={activeTab.includes('live') ? 'active' : 'disabled'}
        >
          {data
            .filter((item) => item.status === 'live')
            .map((item) => {
              return (
                <Style.Card
                  key={item.id}
                  borderColor={STYLES.colors.colorBlueSecondary}
                >
                  <Style.CardHeader
                    borderColor={STYLES.colors.colorBlueSecondary}
                  >
                    Live
                  </Style.CardHeader>
                  <H2>{item.title}</H2>
                  <P>{item.detail}</P>
                  <Badge>{item.category}</Badge>
                  <Style.Flex>
                  <Upvote
                      direction='row'
                      votes={item.votes}
                      onClick={() => dispatch(incrementVote(item.id))}
                    />
                    <Style.Footer>
                      <CommentIcon />
                      <Style.Span>
                        {item.comments.length +
                          item.comments.reduce(
                            (acc, curr) => acc + curr.replies.length,
                            0
                          )}
                      </Style.Span>
                    </Style.Footer>
                  </Style.Flex>
                </Style.Card>
              );
            })}
        </Style.StatusItem>
      </Style.StatusContainer>
    </Style.PageContainer>
  );
};
export default Roadmap;
