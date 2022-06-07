import styled from 'styled-components';
import STYLES from '../../constants/styles';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  max-width: 75rem;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 0 2rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Navigate = styled(Link)`
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${STYLES.colors.colorGrayAccent};

  :hover {
    text-decoration: underline;
  }
`;

export const CommentsContainer = styled.div`
  background-color: #fff;
  border-radius: ${STYLES.effects.borderRadius};
  padding: 2.4rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CommentsInnerContainer = styled.div`
  :not(:last-child) {
    /* margin-bottom: 2rem; */
  }
`;

interface IComment {
  width?: string;
  borderLeft?: boolean;
}

export const Comment = styled.article<IComment>`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  width: ${(props) => props.width || '100%'};
  padding-bottom: 1rem;
  margin-left: auto;
  padding-left: ${(props) => props.borderLeft && '2rem'};

  :not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const ImgUser = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
`;

export const BtnReply = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-weight: 600;
  color: ${STYLES.colors.colorBluePrimary};
  font-size: 1.3rem;
`;

export const UserName = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${STYLES.colors.colorGraySecondary};
  display: block;
`;

export const UserLogin = styled.span`
  font-size: 1.4rem;
  color: ${STYLES.colors.colorGraySecondary};
  display: block;
  padding-bottom: 1rem;
`;

export const UserDetail = styled.div``;

export const Span = styled.span`
  font-size: 1.5rem;
  color: ${STYLES.colors.colorPurple};
  font-weight: 700;
`;

export const AddCommentContainer = styled.div`
  background-color: #fff;
  border-radius: ${STYLES.effects.borderRadius};
  padding: 2.4rem 3rem;
  margin-top: 2rem;
`;

interface ITextarea {
  flex?: number;
  margin?: string;
}

export const TextArea = styled.textarea<ITextarea>`
  border: none;
  background-color: ${STYLES.colors.colorwhiteSecondary};
  border-radius: ${STYLES.effects.borderRadius};
  resize: none;
  border: 1px solid transparent;
  height: 8rem;
  padding: 1.2rem 2rem;
  width: 100%;
  margin: ${(props) => props.margin};
  flex: ${(props) => props.flex};

  :focus {
    outline: none;
    border: 1px solid ${STYLES.colors.colorPurple};
  }

  &.error {
    border: 1px solid #d73737;
  }
`;

export const P = styled.p`
  font-size: 1.5rem;
  color: #d73737;
  text-align: center;
  min-height: 2.2rem;
  font-weight: 700;
`;

export const ReplyContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  justify-content: flex-end;
  width: 100%;
  margin-left: auto;
`;

export const BtnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PostBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
