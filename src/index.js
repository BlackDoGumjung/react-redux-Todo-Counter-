import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux'; //Provider로 <App/> 감싸줘야 적용
import { composeWithDevTools } from 'redux-devtools-extension'; // redux 개발자도구

const store = createStore(rootReducer, composeWithDevTools()); // store생성, 개발자도구 활성화
console.log(store.getState); // 스토어 상태 확인

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
