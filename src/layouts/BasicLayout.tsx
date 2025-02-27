import React from 'react'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import { Layout } from 'antd'

import { motion, AnimatePresence } from 'framer-motion'

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
    const location = useLocation()

    return (
        <Layout style={layoutStyle}>
            <TheSider />
            <Layout>
                <TheHeader />
                <Content style={contentStyle}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            initial={{ opacity: 1, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut' }}
                        >
                            <Outlet /> {/* 子路由的出口 */}
                        </motion.div>
                    </AnimatePresence>
                </Content>
            </Layout>
        </Layout>
    )
}

export default BasicLayout
