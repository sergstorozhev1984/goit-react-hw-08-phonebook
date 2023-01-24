// import { Filter } from './Filter/Filter';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import css from '../components/App.module.css';
// import { Loader } from './Loader/Loader';
// import { getIsloading } from 'redux/selectors';
// import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Login } from 'pages/Login';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home';
import { Register } from 'pages/Register';


export const App = () => {
  // const  isLoading = useSelector(getIsloading);

    return (
      <Layout>
      {/* <Suspense fallback={<Loader/>}> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />}/>
          {/* <Route path="/contacts" element={<Contacts />}/> */}
          {/* <Route path="*" element={<PageNotFound />} />  */}
        </Routes>
      {/* </Suspense> */}
      <ToastContainer autoClose={3000} />
    </Layout>
      
        // <h1 className={css.title}>Phonebook</h1>
        // <ContactForm  />
        // <h2 className={css.subTitle}>Contacts</h2>
        // <Filter />
        // {isLoading && <Loader/>}
        // <ContactList />
        // <ToastContainer />
      
    );
  
}
