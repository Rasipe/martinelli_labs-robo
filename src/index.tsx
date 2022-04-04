import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import reducer from "./store/reducer"
import { createStore, applyMiddleware, Store } from "redux"
import thunk from "redux-thunk"

import { createRoot } from 'react-dom/client';
import { RBDispatch, RBAction, RBState } from './store/types';
const container: HTMLElement = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

const store: Store<RBState, RBAction> & {
  dispatch: RBDispatch
} = createStore(reducer, applyMiddleware(thunk))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();