import React, { useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dropdown, Space, Avatar, type MenuProps } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'
import { removeCookie } from '@/utils/handleCookie'

const TheUserInfoDropdown: React.FC = () => {
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
    const navigate = useNavigate()

    // 为了确保 loginOut 函数不会在每次渲染时重新创建，可以使用 useCallback 钩子来缓存该函数。这样可以避免 useEffect 中的依赖项频繁变化，从而消除警告
    const loginOut = useCallback(() => {
        // 退出登录逻辑
        // 清除登录状态和缓存
        removeCookie()
        navigate('/login')
    }, [navigate])

    // 自定义事件 为了 utils/request.ts 中，当登录过期时，可以清除登录状态和缓存，并重定向到登录页面
    useEffect(() => {
        const handleUnauthorized = () => {
            loginOut()
        }

        window.addEventListener('unauthorized', handleUnauthorized)
        // 返回一个清理函数，确保组件卸载时移除事件监听器 这个清理函数会在组件卸载时自动调用，不需要手动调用。
        return () => {
            window.removeEventListener('unauthorized', handleUnauthorized)
        }
    }, [loginOut])

    return (
        <Dropdown menu={{ items, onClick }}>
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                    <span>Admin</span>
                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>
    )
}

export default TheUserInfoDropdown
