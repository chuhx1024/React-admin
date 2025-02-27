import React from 'react'
import { Button } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

import { useSelector, useDispatch } from 'react-redux'
import { toggleCollapsed } from '@/stores/modules/appSlice/index'

const TheHamburger: React.FC = () => {
    const dispatch = useDispatch()
    const collapsed = useSelector((state: { app: { collapsed: boolean } }) => state.app.collapsed)

    return (
        <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => dispatch(toggleCollapsed())}
            style={{
                fontSize: '16px',
                width: 64,
                height: 64,
            }}
        />
    )
}

export default TheHamburger
