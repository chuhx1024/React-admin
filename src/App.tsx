import React, { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import router from './router'
import themeJson from './styles/theme/theme.json'

const appStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: '100vw',
    height: '100vh',
}
const App: React.FC = () => {
    const [theme, setTheme] = useState({})

    useEffect(() => {
        if (themeJson && themeJson.token) {
            setTheme(themeJson.token)
        }
    }, [])

    return (
        <ConfigProvider theme={{ token: theme }}>
            <div style={appStyle}>
                <RouterProvider router={router} />
            </div>
        </ConfigProvider>
    )
}

export default App
