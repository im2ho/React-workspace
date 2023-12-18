import React, {useState} from 'react';
import logo2 from '../img/모르는게산책.jpg';
import '../App.css';

let msg = "내 목소리 들리니 HellO0ooo...";
msg = "들리나요...";

//증가시키는 함수
function AddCount() {
    //useState를 활용해서 값 증가하는 함수를 완성할 것
    const [count, setCount] = useState(0);
    const increament = () => {
        setCount(count +1);
    }

    return (
        <div>
            <h1>숫자 : {count}</h1>
            <button onClick={increament}>Click</button>
        </div>
    )
}

function Count() {
    return(
        <div>
            <header className="App-header">
            <AddCount />
                <h1>Hello React</h1>
                <p>이것은 React JS입니다</p>
                <h2>{msg}</h2>
                <img src={logo2} className="App-logo" alt="logo" />
                <p>당신은 농담곰의 저주에 걸렷습니다... 리액트 공부를 하세요</p>
                <a
                className="App-link"
                href="https://namu.wiki/w/%EC%97%AC%EC%9E%90%20%EA%B7%B8%EB%A0%A4%EB%86%93%EA%B3%A0%20%EB%82%A8%EC%9E%90%EB%9D%BC%EA%B3%A0%20%EC%9A%B0%EA%B8%B0%EA%B8%B0"
                target="_blank"
                rel="noopener noreferrer"
                >
                리액트 공부하러가기
                </a>
            </header>
        </div>
    )
}

export default Count;