export interface IReplies {
  userName: string;
  userLogin: string;
  img: string;
  replyTo: string;
  reply: string;
}

export interface IComment {
  userName: string;
  userLogin: string;
  img: string;
  comment: string;
  replies: IReplies[];
}

export interface IData {
  title: string;
  category: string;
  detail: string;
  votes: number;
  id: number;
  comments: IComment[];
}
