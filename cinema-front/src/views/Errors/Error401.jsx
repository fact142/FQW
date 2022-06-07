import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

export const Error401 = () => {

  return (
    <div className={styles.error}>
      <p>You are not authorized, please
      <Link to='/login'>Log in</Link></p>
    </div>
  );
};
