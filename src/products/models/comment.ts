export interface IComment {
  id: number;
  message: string;
  rating: number;
  title: string;
  user: string;
}

export type CreateCommentType = Omit<IComment, 'id'>;
