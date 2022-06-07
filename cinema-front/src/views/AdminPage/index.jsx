import { Tabs } from 'antd';
import { useState } from 'react';
import MainLayout from '../../components/MainLayout/index';
import AddMovie from '../../components/Admin/AddMovie/index';
import AddSession from '../../components/Admin/AddSession';
import UsersTable from '../../components/Admin/UsersTable';

const { TabPane } = Tabs;

const AdminPage = () => {
  const [flag, setFlag] = useState(true);

  return(
    <MainLayout>
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Таблица пользователей" key="1">
            <UsersTable />
          </TabPane>
          <TabPane tab="Добавить фильм" key="2">
            <AddMovie flag={flag} setFlag={setFlag}/>
          </TabPane>
          <TabPane tab="Добавить сеанс" key="3">
            <AddSession flag={flag} />
          </TabPane>
        </Tabs>
      </div>
    </MainLayout>
  )
}

export default AdminPage;
