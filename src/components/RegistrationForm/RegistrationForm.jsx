import { Container } from 'components/Container/Container';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { registerUserThunk } from 'redux/auth/authUserThunk';
import css from '../ContactForm/ContactForm.module.css';
import styles from './RegistrationForm.module.css';

export const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      name,
      email,
      password,
    };
    dispatch(registerUserThunk(formData));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <h2 className={styles.title}>Make your registration now</h2>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label className={css.label}>
          E-mail
          <input
            className={css.input}
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label className={css.label}>
          Password
          <input
            className={css.input}
            type="password"
            autoComplete="off"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button className={css.btn} type="submit">
          Create account
        </button>
        <NavLink className={styles.link} to="/login">
          Log in
        </NavLink>
      </form>
    </Container>
  );
};
