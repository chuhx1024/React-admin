import BasicLayout from '@/layouts/BasicLayout'
import LoginLayout from '@/layouts/LoginLayout'
import Login from '@/views/login'
import React from 'react'
import { VideoCameraOutlined, UploadOutlined, UserOutlined } from '@ant-design/icons'

import { createBrowserRouter, RouteObject } from 'react-router-dom'

import { Outlet } from 'react-router-dom'

import UserList from '@/views/userManager/userList'

// 定义 meta 字段的类型
export interface RouteMeta {
    key: string
    hidden?: boolean
    icon: React.ReactNode
    label: string
    requiresAuth?: boolean
    [key: string]: string | number | boolean | object | null | undefined | React.ReactNode //允许其他自定义属性
}

export type RouteConfig = RouteObject & {
    meta?: RouteMeta
    children?: RouteConfig[]
}
export type siderbarRouteConfig = RouteObject & {
    meta: RouteMeta
    children?: RouteConfig[]
}
export const siderbarRoutes: siderbarRouteConfig[] = [
    {
        path: '/dashboard',
        element: <div>Dashboard</div>,
        meta: {
            key: '/dashboard',
            icon: <VideoCameraOutlined />,
            label: 'Dashboard',
        },
    },

    {
        path: '/user',
        element: <Outlet />,
        meta: {
            key: '/user',
            icon: <UserOutlined />,
            label: '用户管理',
        },
        children: [
            {
                path: '/user/list',
                element: <UserList />,
                meta: {
                    key: '/user/list',
                    icon: <UserOutlined />,
                    label: '用户列表',
                },
            },
            {
                path: '/user/add',
                element: <div>创建用户</div>,
                meta: {
                    key: '/user/add',
                    icon: <UserOutlined />,
                    label: '新建用户',
                },
            },
        ],
    },
    {
        path: '/role',
        element: (
            <div>
                role123
                <Outlet />
            </div>
        ),
        meta: {
            key: '/role',
            icon: <UserOutlined />,
            label: '角色管理',
        },
        children: [
            {
                path: '/role/list',
                element: <div>角色列表</div>,
                meta: {
                    key: '/role/list',
                    icon: <UserOutlined />,
                    label: '角色列表',
                },
            },
            {
                path: '/role/add',
                element: <div>新建角色</div>,
                meta: {
                    key: '/role/add',
                    icon: <UserOutlined />,
                    label: '新建角色',
                },
            },
        ],
    },
    {
        path: '/about',
        element: <div>About</div>,
        meta: {
            key: '/about',
            icon: <UploadOutlined />,
            label: '关于我们',
        },
    },
    {
        path: '/about',
        element: <div>About</div>,
        meta: {
            key: '/about',
            hidden: true,
            icon: <UploadOutlined />,
            label: '关于我们',
        },
    },
]

export const routes: RouteConfig[] = [
    {
        path: '/',
        element: <BasicLayout />,
        children: [...siderbarRoutes],
    },
    {
        path: '/login',
        element: <LoginLayout />,
        children: [
            {
                path: '/login',
                element: <Login />,
            },
        ],
    },
]

const router = createBrowserRouter(routes)

export default router
