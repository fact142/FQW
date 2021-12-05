import * as React from 'react';
import styles from './AuthForm.module.css'

const AuthForm = ({ title, onSubmit, children }) => {
  return (
    <div className={ styles.form }>
      {title}
      <form onSubmit={ onSubmit }>
        {children}
      </form>
    </div>
  );
};

export default AuthForm;
