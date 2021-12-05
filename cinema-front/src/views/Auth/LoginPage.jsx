import * as React from 'react';
import AuthForm from '../../components/Auth/AuthForm'
import { AuthInput } from '../../components/Auth/AuthInput';
import { useState } from 'react';
import { AuthButton } from '../../components/Auth/AuthButton';
import styles from './Auth.module.css'
import { useDispatch } from 'react-redux';
import { login } from '../../store/actions/userAction';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

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
      </AuthForm>
    </div>
  );
};
