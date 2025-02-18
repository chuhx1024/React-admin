import BasicLayout from '@/layouts/BasicLayout'

import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
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
