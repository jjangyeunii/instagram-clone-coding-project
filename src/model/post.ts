export type Comment = {
  comment: string;
  username: string;
  image: string;
};

export type SimplePost = Omit<FullPost, "comments"> & {
  comments: number;
};

export type FullPost = {
  id: string;
  username: string;
  uesrImage: string;
  image: string;
  text: string;
  createdAt: string;
  likes: string[];
  comments: Comment[];
};
