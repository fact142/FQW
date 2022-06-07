import { useEffect, useState } from 'react';
import { getUsers } from '../../../APIs/userApi';
import { Table } from 'antd';

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    const users = await getUsers();
    users.forEach((item) => {
      item.key = item.id
    })
    setUsers(await getUsers())
  }, []);

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Lastname',
      dataIndex: 'lastname',
      key: 'lastname',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },    {
      title: 'Bonuses',
      dataIndex: 'bonus',
      key: 'bonus',
    },
  ]

  return(
    <Table columns={columns} dataSource={users}>

    </Table>
  )
}

export default UsersTable;
