import { IAuthor } from "@project/libs/shared/types";

export class Author implements IAuthor {
  public id: string;
  public createdAt: Date;
  public countComments?: number;
  public countPosts?: number;
  public countLikes?: number;
}
