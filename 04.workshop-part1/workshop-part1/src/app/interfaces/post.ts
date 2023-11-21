import { ITheme } from "./theme";
import { IUser } from "./user";

export interface IPost {
    created_at: string,
    likes: string[],
    text: string,
    themeId: ITheme,
    updatedAt: string,
    userId: IUser,
    __v: number,
    _id: string
}