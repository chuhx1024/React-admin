export interface ILoginRes {
    access_token: string
    token_type: string
}

export type ILoginReq = {
    username: string
    password: string
}
