import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store, persistor} from './Components/Redux/store';
import { UserProvider } from './contexts/userContext';
import {ProductsProvider} from './contexts/ProductsContext';

ReactDOM.render(
  <Provider store = {store}>
  <BrowserRouter>
    <React.StrictMode>
      <PersistGate persistor={persistor}>
      {/* <UserProvider> */}
        {/* <ProductsProvider> */}
        <App />
        {/* </ProductsProvider> */}
      {/* </UserProvider> */}
      </PersistGate>
    </React.StrictMode>
  </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
