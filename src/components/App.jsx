import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from 'pages/Login';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home';
import { Register } from 'pages/Register';
import { Contacts } from 'pages/Contacts';
import { PublicRoute } from './Routes/PublicRoute';
import { PrivateRoute } from './Routes/PrivateRoute';
import { Suspense, useEffect } from 'react';
import { getCurrentUserThunk } from 'redux/auth/authUserThunk';
import { useDispatch } from 'react-redux';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserThunk());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<PublicRoute />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
      </Suspense>
      <ToastContainer autoClose={3000} />
    </Layout>
  );
};
