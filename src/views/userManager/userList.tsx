import React, { useEffect, useState } from 'react'
import { Table, message } from 'antd'
import type { TableProps } from 'antd'
import { IUserReq } from '@/api/types/user'
import { getUserList } from '@/api/user'

const columns: TableProps<IUserReq>['columns'] = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
        render: (text) => <a>{text}</a>,
    },
    {
        title: '全名',
        dataIndex: 'full_name',
        key: 'full_name',
    },
    {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
    },
]

const UserList: React.FC = () => {
    const [users, setUsers] = useState<IUserReq[]>([])
    const [messageApi] = message.useMessage()

    useEffect(() => {
        const loadUsers = async () => {
            const { code, data, msg } = await getUserList()
            if (code === 200) {
                setUsers(data)
            } else {
                messageApi.error(msg)
            }
        }

        loadUsers()
    }, [messageApi])

    return <Table<IUserReq> columns={columns} dataSource={users} />
}

export default UserList
