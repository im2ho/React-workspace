import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App2 from './js/App2'; //import 변수 from 'js파일명';
import ParentComponent from './js/ParentComponent';
import Blog from './js/Blog';
import Board from './js/Board';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Board />
    {/*<Counter /> {/*import에서 설정한 변수명*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//React.StrictMode : react 내부에서 잠재적 문제가 있는지 알아내기 위한 도구
//reportWebVitals : react 성능 측정하기 위한 메서드