import styles from './userForm.module.css';
import useUser from '../../../hooks/useUser';

const UserFrom = () => {
  const currentUser = useUser()
  return(
    <div className={styles.userFrom}>
      {currentUser.username}
    </div>
  )
}

export default UserFrom;
