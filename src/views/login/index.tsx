import React from 'react'
import { Flex, Button } from 'antd'
import styles from './login.module.scss'

const Login: React.FC = () => {
    return (
        <Flex className={styles.loginContainer} justify="center" align="center">
            <Button type="primary">Primary</Button>
            <Button type="primary">Primary</Button>
            <Button type="primary">Primary</Button>
            <Button type="primary">Primary</Button>
        </Flex>
    )
}

export default Login
