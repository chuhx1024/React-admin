import { Outlet } from 'react-router-dom'
import React from 'react'

import { Button } from 'antd'
const BasicLayout: React.FC = () => {
    return (
        <>
            <div>123</div>
            <Button type="primary">Button</Button>
            <Outlet /> {/* 子路由的出口 */}
        </>
    )
}

export default BasicLayout
