export interface Project {
    id: number | string
    name: string
    alias: string
    creator: string
}
export interface UserState {
    user_id: number | string
    username: string
    currentProject: Project
}
