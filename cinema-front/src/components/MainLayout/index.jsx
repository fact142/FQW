import {Layout, Menu} from 'antd';
import {NavLink} from "react-router-dom";
import { mainColor } from '../../constants/styles';

const {Header, Content} = Layout;


const MainLayout = ({children}) => {
  let isAdmin = true
  return (
    <Layout className="layout" style={{minHeight: "100vh"}}>
      <Header style={{backgroundColor: mainColor}}>
        <div className="logo"/>
        <Menu style={{backgroundColor: mainColor}} mode="horizontal">
          <Menu.Item key={0}>
            <NavLink to="/schedule">
              Афиша
            </NavLink>
          </Menu.Item>
          <Menu.Item key={1}>
            <NavLink to="/account">
              Мой профиль
            </NavLink>
          </Menu.Item>
          {isAdmin &&
            <Menu.Item key={3}>
              <NavLink to="/admin">
                Administration
              </NavLink>
            </Menu.Item>
          }
        </Menu>
      </Header>
      <Content style={{padding: '0 50px'}}>
        {children}
      </Content>
    </Layout>);
};

export default MainLayout;
