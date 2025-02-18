import request from '@/utils/request'
import { type IUserReq, IUserAddreq } from '@/api/types/user'

// 用户列表
export const getUserList = () => {
    return request<IUserReq[]>({
        method: 'get',
        url: 'user/users/',
    })
}

// 用户创建
export const addUser = (data: IUserAddreq) => {
    return request<IUserReq[]>({
        method: 'post',
        url: 'user/users/',
        data,
    })
}
