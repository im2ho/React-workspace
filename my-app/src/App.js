//import logo from './logo.svg';
import logo2 from './모르는게산책.jpg';
import './App.css';

//JS에서는 글자값인지 숫자값인지 중요하지 X
//재사용이 가능한지, 재할당이 가능한지 여부가 중요하다

//var : 재선언, 재할당 가능
//let : 재선언 불가, 재할당 가능
//const : 재선언, 재할당 불가 > 한 번 선언하면 값을 변경 혹은 수정 불가

let msg = "내 목소리 들리니 HellO0ooo...";
msg = "들리나요...";

function HiComponent(){
  return (
    <div>
      <h1>{msg}</h1>
      <HiComponent />
      <p>아아- 이것은 컴포넌트라는 것이다</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React</h1>
        <p>이것은 React JS입니다</p>
        <h2>{msg}</h2>
        <img src={logo2} className="App-logo" alt="logo" />
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
  );
}

export default App;

//export default : 다른 파일에서 사용할 수 있도록 내보내는 부분
//기본적으로 내보낼 항목을 지정하는 역할을 함
//다른 JS에서 App.js에 있는 function App을 사용할 수 있도록
//내보내기도 하지만 App.js에서 기본으로 사용할 항목을 지정하기도 함