import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Router } from 'react-router-dom';
import App from './app/layout/App';
import './app/layout/styles.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from 'history';
import { StoreProvider } from './app/context/StoreContext';
import { configureStore } from './app/store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

console.log(store.getState())

export const history = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Router history={history}>
          <StoreProvider>
            <Provider store={store}>

            <App />
            </Provider>
          </StoreProvider>
        </Router>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
