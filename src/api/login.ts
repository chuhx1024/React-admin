import request from '@/utils/request'
import { type ILoginRes, type ILoginReq } from '@/api/types/login'

// 用户登录
export const login = (data: ILoginReq) => {
    return request<ILoginRes>({
        method: 'POST',
        url: '/login',
        data: new URLSearchParams(data),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
}
