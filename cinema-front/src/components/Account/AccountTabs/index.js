import { Tabs } from 'antd';
import styles from './accountTabss.module.css'
import AchievementsList from '../AchivmentsList';
const { TabPane } = Tabs;

const AccountTabs = () => {
  return(
    <div className={styles.accountTabs}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Мои билеты" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="История заказов" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Достижения" key="3">
          <AchievementsList />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default AccountTabs;
