import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as Style from './styles';
import STYLES from '../../constants/styles';
import Card from '../../components/CardSuggestion/Card/Card';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { IData } from '../../interfaces/DataInterface';
import { H2, P, Button, Navigate } from '../../components/shared/shared';
import { useDispatch } from 'react-redux';

import {
  addComment,
  toggleReplyField,
  addReply,
} from '../../store/slices/dataSlice';

import userImg from './../../assets/images/currentuser.jpg';
import Goback from '../../components/GoBack/Goback';

const Details = () => {
  const [feedBack, setFeedback] = useState<IData | null>(null);
  const [comment, setComment] = useState({
    userName: 'Zena Kelley',
    userLogin: 'velvetround',
    img: userImg,
    comment: '',
    replies: [],
  });

  const [error, setError] = useState(false);
  const [replyTo, setReplyTo] = useState('');
  const [isDisableReply, setIsDisableReply] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [replyError, setReplyError] = useState(false);

  const { data } = useSelector((state: RootState) => state.data);
  const { id } = useParams();

  
  const dispatch = useDispatch();

  useEffect(() => {
    const feedbackToFind = data.find((fb) => fb.id === id);
    setFeedback(feedbackToFind!);
  }, [id, data]);

  const handleAddComment = () => {
    if (comment.comment.length === 0) {
      setError(true);
      return;
    }

    dispatch(addComment({ id: id, comment: comment }));
    setComment({
      userName: 'Zena Kelley',
      userLogin: 'velvetround',
      img: userImg,
      comment: '',
      replies: [],
    });
    setError(false);
  };

  const handleEnableReply = (id: string, userName: string, replyTo: string) => {
    dispatch(
      toggleReplyField({
        id: id,
        userName: userName,
      })
    );

    setIsDisableReply(true);
    setReplyTo(replyTo);
  };

  const handleCancel = (id: string, userName: string) => {
    dispatch(
      toggleReplyField({
        id: id,
        userName: userName,
      })
    );

    setIsDisableReply(false);
    setReplyError(false);
    setReplyTo('');
  };

  const handleReply = (id: string, userLogin: string) => {
    if (replyText.length === 0) {
      setReplyError(true);
      return;
    }

    dispatch(
      addReply({
        id: id,
        userLogin: userLogin,
        data: {
          userName: 'Zena Kelley',
          userLogin: 'velvetround',
          img: userImg,
          replyTo: replyTo,
          reply: replyText,
        },
      })
    );
  };

  return (
    <Style.Container>
      <Style.Header>
        <Goback to='/' />
        <Navigate
          to={`/feedback-edit/${id}`}
          background={STYLES.colors.colorBluePrimary}
        >
          Edit feedback
        </Navigate>
      </Style.Header>
      {feedBack !== null && <Card {...feedBack} />}

      <Style.CommentsContainer>
        <H2>
          <span style={{ marginRight: '1rem' }}>
            {String(
              feedBack?.comments.length! +
                feedBack?.comments?.reduce(
                  (acc, curr) => acc + curr.replies.length,
                  0
                )!
            )}
          </span>
          Comments
        </H2>
        {feedBack?.comments.map((comment) => {
          return (
            <Style.CommentsInnerContainer key={comment.userName}>
              <Style.Comment>
                <Style.ImgUser src={comment.img} alt='' />
                <Style.UserDetail>
                  <Style.UserName>{comment.userName}</Style.UserName>
                  <Style.UserLogin>@{comment.userLogin}</Style.UserLogin>
                  <P size='1.5rem'>{comment.comment}</P>
                </Style.UserDetail>
                <Style.BtnReply
                  onClick={() =>
                    handleEnableReply(id!, comment.userName, comment.userLogin)
                  }
                >
                  Reply
                </Style.BtnReply>
              </Style.Comment>
              {comment.replies.map((reply) => {
                return (
                  <Style.Comment key={reply.userLogin} borderLeft width='98%'>
                    <Style.ImgUser src={reply.img} />
                    <Style.UserDetail>
                      <Style.UserName>{reply.userName}</Style.UserName>
                      <Style.UserLogin>@{reply.userLogin}</Style.UserLogin>
                      <P size='1.5rem'>
                        <Style.Span>@{reply.replyTo}</Style.Span> {reply.reply}
                      </P>
                    </Style.UserDetail>
                    <Style.BtnReply
                      onClick={() =>
                        handleEnableReply(
                          id!,
                          comment.userName,
                          reply.userLogin
                        )
                      }
                    >
                      Reply
                    </Style.BtnReply>
                  </Style.Comment>
                );
              })}
              {comment.showReplyField && (
                <Style.ReplyContainer>
                  <Style.TextArea
                    placeholder={`Reply to @${replyTo}`}
                    flex={0.8}
                    onChange={(e) => setReplyText(e.target.value)}
                    className={replyError ? 'error' : undefined}
                  />
                  <Style.BtnsContainer>
                    <Button
                      background='#D73737'
                      onClick={() => handleCancel(id!, comment.userName)}
                    >
                      Cancel
                    </Button>
                    <Button onClick={() => handleReply(id!, comment.userLogin)}>
                      Post Reply
                    </Button>
                  </Style.BtnsContainer>
                </Style.ReplyContainer>
              )}
            </Style.CommentsInnerContainer>
          );
        })}
      </Style.CommentsContainer>

      <Style.AddCommentContainer>
        <H2>Add Comment</H2>
        <Style.TextArea
          onChange={(e) =>
            setComment((prev) => ({ ...prev, comment: e.target.value }))
          }
          placeholder='Type your comments here...'
          value={comment.comment || ''}
          margin='2rem 0'
        />
        <Style.P>{error && "Comment can't be empty..."}</Style.P>
        <Style.PostBtnContainer>
          <Button onClick={handleAddComment}>Post Comment</Button>
        </Style.PostBtnContainer>
      </Style.AddCommentContainer>
    </Style.Container>
  );
};
export default Details;
