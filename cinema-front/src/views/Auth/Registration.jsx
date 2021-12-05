import * as React from 'react';
import AuthForm from '../../components/Auth/AuthForm'
import { AuthInput } from '../../components/Auth/AuthInput';
import { useState } from 'react';
import { AuthButton } from '../../components/Auth/AuthButton';
import styles from './Auth.module.css'
import { useDispatch } from 'react-redux';
import { login, signup } from '../../store/actions/userAction';
import { signUp } from '../../APIs/userApi';

export const Registration = () => {
  const [username, setUsername] = useState('')
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(username, lastname, email, password));
  }

  return (
    <div className={styles.label}>
      <AuthForm onSubmit={onSubmit} title="Login">
        <AuthInput value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Name" />
        <AuthInput value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="Lastname" />
        <AuthInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <AuthInput value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
        <AuthButton type="submit" text="Registrate"/>
      </AuthForm>
    </div>
  );
};
