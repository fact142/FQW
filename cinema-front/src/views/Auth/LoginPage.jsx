import * as React from 'react';
import AuthForm from '../../components/Auth/AuthForm/index'
import { AuthInput } from '../../components/Auth/AuthInput/index';
import { useState } from 'react';
import { AuthButton } from '../../components/Auth/AuthButton/index';
import styles from './Auth.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions/userAction';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.error);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  }

  return (
    <div className={styles.label}>
      <AuthForm onSubmit={onSubmit} title="Login">
        <AuthInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <AuthInput value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
        <AuthButton type="submit" text="Login"/>
        <p>{error}</p>
      </AuthForm>
    </div>
  );
};
