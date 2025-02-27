import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { Layout } from 'antd'

import { motion, AnimatePresence } from 'framer-motion'

const contentStyle: React.CSSProperties = {
    minHeight: 'calc(100vh-64px)',
    overflow: 'auto',
    padding: '10px',
}

const index: React.FC = () => {
    const { Content } = Layout
    const location = useLocation()
    return (
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
    )
}

export default index
