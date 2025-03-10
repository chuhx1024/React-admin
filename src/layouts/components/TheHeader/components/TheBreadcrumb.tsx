import React from 'react'
import { Breadcrumb, Typography } from 'antd'
import { useLocation } from 'react-router-dom'
import { type siderbarRouteConfig } from '@/router/index'
import { siderbarRoutes } from '@/router/index'

import { motion, AnimatePresence } from 'framer-motion'

const TheBreadcrumb: React.FC = () => {
    const location = useLocation()
    console.log(location, 123)
    const pathnames = location.pathname.split('/').filter((x) => x)
    const findRouteByPath = (
        routes: siderbarRouteConfig[],
        path: string,
    ): siderbarRouteConfig | undefined => {
        for (const route of routes) {
            if (route.path === path) {
                return route
            }
            if (route.children) {
                const found = findRouteByPath(route.children, path)
                if (found) {
                    return found
                }
            }
        }
        return undefined
    }

    console.log(pathnames, 123)

    const breadcrumbItems = pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
        const isLast = index === pathnames.length - 1
        const route = findRouteByPath(siderbarRoutes, routeTo)

        if (!route || !route.meta) {
            return {
                key: routeTo,
                title: <Typography.Text>{name}</Typography.Text>,
            }
        }

        const animateItem = (
            <AnimatePresence mode="wait">
                <motion.div
                    key={route.meta.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut' }}
                >
                    {isLast ? (
                        <Typography.Text>{route.meta.label}</Typography.Text>
                    ) : (
                        <Typography.Link href={routeTo}>{route.meta.label}</Typography.Link>
                    )}
                </motion.div>
            </AnimatePresence>
        )

        return {
            key: routeTo,
            title: animateItem,
        }
    })
    // 如果不是首页，添加一个首页在前面
    if (location.pathname !== '/dashboard') {
        breadcrumbItems.unshift({
            key: '/dashboard',
            title: <Typography.Link href="/">Dashboard</Typography.Link>,
        })
    }

    return <Breadcrumb items={breadcrumbItems} />
}

export default TheBreadcrumb
