import { Outlet } from 'react-router-dom'
import React from 'react'
const BasicLayout: React.FC = () => {
    return (
        <>
            <div>123</div>
            <Outlet /> {/* 子路由的出口 */}
        </>
    )
}

export default BasicLayout
