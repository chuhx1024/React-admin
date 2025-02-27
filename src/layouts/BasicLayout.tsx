import React from 'react'
import { Outlet } from 'react-router-dom'

import { Layout } from 'antd'

import TheSider from './components/TheSider/index.tsx'
import TheHeader from './components/TheHeader/index.tsx'

const layoutStyle = {
    overflow: 'hidden',
    width: '100%',
    maxWidth: '100%',
    height: '100%',
}

const contentStyle: React.CSSProperties = {
    minHeight: 'calc(100vh-64px)',
    overflow: 'auto',
    padding: '10px',
}

const BasicLayout: React.FC = () => {
    const { Content } = Layout

    return (
        <Layout style={layoutStyle}>
            <TheSider />
            <Layout>
                <TheHeader />
                <Content style={contentStyle}>
                    <Outlet /> {/* 子路由的出口 */}
                </Content>
            </Layout>
        </Layout>
    )
}

export default BasicLayout
