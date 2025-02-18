import React from 'react'
import { Flex, Button, Checkbox, Form, Input, type FormProps, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { setToken } from '@/utils/handleCookie'
import styles from './login.module.scss'
import { login } from '@/api/login'

type FieldType = {
    username: string
    password: string
    remember?: string
}

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo)
}
const Login: React.FC = () => {
    const navigate = useNavigate()
    const [messageApi] = message.useMessage()
    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        const { username, password } = values
        const { code, msg, data } = await login({ username, password })

        if (code === 200) {
            messageApi.info('Hello, Ant Design!')
            const { access_token, token_type } = data
            setToken(access_token, token_type)
            navigate('/')
        } else {
            messageApi.error(msg)
        }
    }
    return (
        <Flex className={styles.loginContainer} justify="center" align="center">
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Flex>
    )
}

export default Login
