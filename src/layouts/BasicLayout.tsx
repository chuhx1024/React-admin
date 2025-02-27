import React from 'react'

import { Layout } from 'antd'

import { TheHeader, TheSider, TheMainApp } from './components/index'

const layoutStyle = {
    overflow: 'hidden',
    width: '100%',
    maxWidth: '100%',
    height: '100%',
}

const BasicLayout: React.FC = () => {
    return (
        <Layout style={layoutStyle}>
            <TheSider />
            <Layout>
                <TheHeader />
                <TheMainApp />
            </Layout>
        </Layout>
    )
}

export default BasicLayout
