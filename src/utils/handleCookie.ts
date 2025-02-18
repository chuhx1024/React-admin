import Cookie from 'js-cookie'

// token 相关
const tokenKey = 'TOKEN'

export const getToken = () => {
    return Cookie.get(tokenKey)
}

export const setToken = (token: string, tokenType: string) => {
    const _token = {
        token,
        tokenType,
    }
    localStorage.setItem('_token', JSON.stringify(_token))

    return Cookie.set(tokenKey, token)
}

export const removeToken = () => {
    localStorage.removeItem('_token')
    return Cookie.remove(tokenKey)
}

// 项目Id 相关
const projectIdKey = 'PROJECTID'

export const getProjectId = () => {
    return Cookie.get(projectIdKey)
}

export const setProjectId = (ProjectId: string) => {
    return Cookie.set(projectIdKey, ProjectId)
}

export const removeProjectId = () => {
    return Cookie.remove(projectIdKey)
}

export const removeCookie = () => {
    removeProjectId()
    removeToken()
}
