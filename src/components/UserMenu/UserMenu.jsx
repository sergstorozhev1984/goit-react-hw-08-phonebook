import { useDispatch, useSelector } from 'react-redux';
import { logOutUserThunk } from 'redux/auth/authUserThunk';
import { getUserEmail } from 'redux/selectors';
import css from './UserMenu.module.css';

export const UserMenu = () => {
    const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);
    return (
        <div className={css.wrapUserMenu}>
            <p className={css.userName}>Welcome back, {userEmail}!</p>
            <button className={css.btn} type="button" onClick={() => dispatch(logOutUserThunk())}>
              Log out
            </button>
        </div>
    )
}