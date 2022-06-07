import UserForm from '../UserForm';
import AccountTabs from '../AccountTabs';

import styles from './account.module.css';

const Account = () => {
  return(
    <div className={styles.accountLayout}>
      <UserForm />
      <AccountTabs />
    </div>
  )
}

export default Account;
