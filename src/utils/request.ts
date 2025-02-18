import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'
import { getToken, getProjectId } from '@/utils/handleCookie'
import { message } from 'antd'
import { removeToken } from '@/utils/handleCookie'
// import { useNavigate } from 'react-router-dom'

const service = axios.create({
    baseURL: '/api',
    timeout: 100000000000000, // request timeout
})

// request interceptor
service.interceptors.request.use(
    (config) => {
        config.headers['Authorization'] = 'Bearer ' + getToken() || ''

        config.headers['X-Project-Id'] = getProjectId() || ''
        return config
    },
    (error) => {
        console.log(error) // for dProject
        return Promise.reject(error)
    },
)
// response interceptor
service.interceptors.response.use(
    (response: AxiosResponse) => {
        return response
    },
    (error) => {
        if (error.response.status === 401) {
            message.error('登录过期,请重新登录!')
            removeToken()
            window.dispatchEvent(new CustomEvent('unauthorized'))
        }
        return error
    },
)
export interface ICommon<T> {
    code: number
    data: T
    msg: string
}

export default <T>(config: AxiosRequestConfig) => {
    return service(config).then((res): ICommon<T> => {
        return res.data
    })
}
