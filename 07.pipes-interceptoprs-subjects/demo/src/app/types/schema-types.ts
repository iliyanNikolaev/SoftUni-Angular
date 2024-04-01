export type User = {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    profilePic: string,
    posts: any[],
    connections: any[],
    _id: string
}

export type Post = {
    textContent: string,
    picture?: string,
    likes: any[],
    comments: any[],
    owner: Owner,
    createdAt: string,
    updatedAt: string,
    __v: number
}

type Owner = {
      firstName: string,
      lastName: string,
      profilePic: string,
      _id: string
}