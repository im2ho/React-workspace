import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './js/App'; //import 변수 from 'js파일명';
import Counter from './js/Count';
import ToggleButton from './js/ToggleButton';
import IndexExample from './js/IndexExample';
import ImageChange from './js/imgChange';
import ObjectExample from './js/ObjectExample';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App /> React에서의 주석 표기 */}
    {/*<Counter /> {/*import에서 설정한 변수명*/}
    {/*<ToggleButton /> */}
    {/*<IndexExample /> */}
    {/*<ImageChange /> */}
    <ObjectExample />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//React.StrictMode : react 내부에서 잠재적 문제가 있는지 알아내기 위한 도구