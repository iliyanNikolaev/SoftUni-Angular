import { IUser } from "./user";

export interface ITheme {
    created_at: string,
    posts: string[],
    subscribers: string[],
    themeName: string,
    __v: number,
    _id: string,
    userId: IUser
}

