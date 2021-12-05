import * as React from 'react';
import styles from './AuthButton.module.css'

export const AuthButton = ({ text, type }) => {
  return (
    <button type={type} className={styles.button}>
      {text}
    </button>
  );
};
