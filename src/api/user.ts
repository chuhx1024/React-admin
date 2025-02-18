import request from '@/utils/request'
import { type IUserReq } from '@/api/types/user'

// 用户列表
export const getUserList = () => {
    return request<IUserReq[]>({
        method: 'get',
        url: 'user/users/',
    })
}
