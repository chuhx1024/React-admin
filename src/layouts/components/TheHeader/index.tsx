import React from 'react'

import { Layout } from 'antd'

import TheBreadcrumb from './components/TheBreadcrumb'
import TheUserInfoDropdown from './components/TheUserInfoDropdown'
import TheHamburger from './components/TheHamburger'
import TheFullScreen from './components/TheFullScreen'
const headerStyle: React.CSSProperties = {
    color: '#fff',
    height: 64,
    lineHeight: '64px',
    padding: '0  12px 0 0',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
}

const TheHeader: React.FC = () => {
    const { Header } = Layout

    return (
        <Header style={headerStyle}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <TheHamburger />
                <TheBreadcrumb />
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <TheFullScreen />
                <TheUserInfoDropdown />
            </div>
        </Header>
    )
}

export default TheHeader
