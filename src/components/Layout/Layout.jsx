import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import css from './Layout.module.css';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import { Container } from 'components/Container/Container';

export const Layout = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <div className={css.layout}>
      <header className={css.header}>
        <Container>
          <nav className={css.nav}>
            <NavLink
              className={({ isActive }) =>
                cn(css.NavLink, { [css.active]: isActive })
              }
              to="/"
            >
              Home
            </NavLink>
            <div className="authWrapper">
              <NavLink
                className={({ isActive }) =>
                  cn(css.NavLink, { [css.active]: isActive })
                }
                to="/register"
              >
                Register
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  cn(css.NavLink, { [css.active]: isActive })
                }
                to="/login"
              >
                Login
              </NavLink>
              {isLoggedIn && (
                <NavLink
                  className={({ isActive }) =>
                    cn(css.NavLink, { [css.active]: isActive })
                  }
                  to="/contacts"
                >
                  Contacts
                </NavLink>
              )}
              </div>
          </nav>
        </Container>
      </header>
      {children}
    </div>
  );
};
