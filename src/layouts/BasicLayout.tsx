import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { Layout, Menu, Button, Dropdown, Space, Avatar, type MenuProps } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined, DownOutlined, UserOutlined } from '@ant-design/icons'
import { SubMenuType, MenuItemType } from 'antd/es/menu/interface'
import { siderbarRoutes, type siderbarRouteConfig } from '@/router/index'

const layoutStyle = {
    overflow: 'hidden',
    width: '100%',
    maxWidth: '100%',
    height: '100%',
}

const headerStyle: React.CSSProperties = {
    color: '#fff',
    height: 64,
    lineHeight: '64px',
    padding: '0  20px 0 0',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
}

const contentStyle: React.CSSProperties = {
    minHeight: 'calc(100vh-64px)',
    overflow: 'auto',
    padding: '10px',
}

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
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

const BasicLayout: React.FC = () => {
    const { Header, Sider, Content } = Layout
    const [collapsed, setCollapsed] = useState(false)
    const navigate = useNavigate()

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: <a onClick={(e) => e.preventDefault()}>退出登录</a>,
        },
    ]
    const onClick: MenuProps['onClick'] = ({ key }) => {
        if (key === '1') {
            loginOut()
        }
    }

    const loginOut = () => {
        // 退出登录逻辑
        // 清除登录状态和缓存
        // 重定向到登录页面
        navigate('/login')
    }

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

    return (
        <Layout style={layoutStyle}>
            <Sider style={siderStyle} trigger={null} collapsible collapsed={collapsed}>
                <div style={logoStyle} />
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={menuItems}
                    onClick={(e) => {
                        const menuKey = e.key
                        if (menuKey) {
                            navigate(menuKey)
                        }
                    }}
                />
            </Sider>
            <Layout>
                <Header style={headerStyle}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <Dropdown menu={{ items, onClick }}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                <Avatar
                                    style={{ backgroundColor: '#87d068' }}
                                    icon={<UserOutlined />}
                                />
                                <span>Admin</span>
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </Header>
                <Content style={contentStyle}>
                    <Outlet /> {/* 子路由的出口 */}
                </Content>
            </Layout>
        </Layout>
    )
}

export default BasicLayout
