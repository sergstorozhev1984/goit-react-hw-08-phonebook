import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { loginUserThunk } from "redux/auth/authUserThunk";
import styles from '../RegistrationForm/RegistrationForm.module.css';
import css from '../ContactForm/ContactForm.module.css';
import { Container } from "components/Container/Container";

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
;
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            email,
            password,
        }
        dispatch(loginUserThunk(formData));
        resetForm();
    }

    const resetForm = () => {
        setEmail('');
        setPassword('');
    }
    return (
        <Container>
            <h2 className={styles.title}>
                Please enter your Email and password before start!
            </h2>
            <form className={css.form} onSubmit={handleSubmit}>
                <label className={css.label}>E-mail
                    <input className={css.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label className={css.label}>Password
                    <input className={css.input} type="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button className={css.btn} type="submit">Login</button>
                <NavLink className={
              styles.link} to='/register'>Register</NavLink>
            </form>
        </Container>
    )
}