import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from './context'
import { Provider } from 'react-redux'
import { store } from './store/functions/function.reducer'

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
