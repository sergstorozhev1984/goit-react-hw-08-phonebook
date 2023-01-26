import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';
import { persistor } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='/goit-react-hw-08-phonebook'>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
