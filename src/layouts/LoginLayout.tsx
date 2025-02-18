import { Outlet } from 'react-router-dom'
import React from 'react'
import { Layout } from 'antd'
const { Content } = Layout

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#1e1e1e',
}

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
    maxWidth: '100%',
    height: '100%',
}
const LoginLayout: React.FC = () => {
    return (
        <Layout style={layoutStyle}>
            <Content style={contentStyle}>
                <Outlet /> {/* 子路由的出口 */}
            </Content>
        </Layout>
    )
}

export default LoginLayout
