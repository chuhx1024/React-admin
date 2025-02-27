import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { Layout, Menu } from 'antd'
import { SubMenuType, MenuItemType } from 'antd/es/menu/interface'
import { siderbarRoutes, type siderbarRouteConfig } from '@/router/index'

import { useSelector } from 'react-redux'

const siderStyle: React.CSSProperties = {
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#fff',
}

const logoStyle: React.CSSProperties = {
    height: '32px',
    padding: '16px',
    margin: '16px',
    backgroundColor: '#1f1f1f',
}
const TheSider: React.FC = () => {
    const { Sider } = Layout

    const generateMenuItems = (routes: siderbarRouteConfig[]): (SubMenuType | MenuItemType)[] => {
        return routes
            .filter((route) => !route.meta.hidden)
            .map((route) => {
                if (route.children && route.children.length > 0) {
                    // 如果有子路由，则创建 SubMenuType
                    return {
                        key: route.meta.key,
                        icon: route.meta.icon,
                        label: route.meta.label,
                        children: generateMenuItems(route.children as siderbarRouteConfig[]),
                    } as SubMenuType
                } else {
                    // 否则创建 MenuItemType
                    return {
                        key: route.meta.key,
                        icon: route.meta.icon,
                        label: route.meta.label,
                    } as MenuItemType
                }
            })
    }

    const menuItems = generateMenuItems(siderbarRoutes)

    const location = useLocation()
    const selectedKeys = [location.pathname]

    const collapsed = useSelector((state: { app: { collapsed: boolean } }) => state.app.collapsed)

    const navigate = useNavigate()

    return (
        <Sider style={siderStyle} trigger={null} collapsible collapsed={collapsed}>
            <div style={logoStyle} />
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                selectedKeys={selectedKeys}
                items={menuItems}
                onClick={(e) => {
                    const menuKey = e.key
                    if (menuKey) {
                        navigate(menuKey)
                    }
                }}
            />
        </Sider>
    )
}

export default TheSider
