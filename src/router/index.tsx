import BasicLayout from '@/layouts/BasicLayout'
import LoginLayout from '@/layouts/LoginLayout'

import { createBrowserRouter } from 'react-router-dom'

import Login from '@/views/login'

const router = createBrowserRouter([
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
    {
        path: '/',
        element: <BasicLayout />,
        children: [
            {
                path: '/',
                element: <div>Home</div>,
            },
            {
                path: '/about',
                element: <div>About</div>,
            },
        ],
    },
])

export default router
