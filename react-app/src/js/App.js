//import는 항상 최상단
import React, {useState} from 'react';
//useState : 상태를 관리하기 위해 사용하는 함수
//사용법 : 배열 형식으로 사용을 하며, 첫 번째 배열은 현재 상태값, 두 번째 배열은 상태 업데이트 하는 값
//const{어쩌구, 저쩌구} = useState(0);

import '../App.css';

const msg = "예쁘잖아!";

//JS에서는 글자값인지 숫자값인지 중요하지 X
//재사용이 가능한지, 재할당이 가능한지 여부가 중요하다

//var : 재선언, 재할당 가능
//let : 재선언 불가, 재할당 가능
//const : 재선언, 재할당 불가 > 한 번 선언하면 값을 변경 혹은 수정 불가

function HiComponent(){
  return (
    <div>
      <h1>{msg}</h1>
      <p>아아- 이것은 컴포넌트라는 것이다</p>
    </div>
  )
}

function Counter () {
  //js코드 작성 공간
  const [count, setCount] = useState(0); //배열[초기값, 변경될 값] = 초기값 설정
  const increament=() => {
    setCount(count + 1);
  }
  return ( //html 태그 코드는 return 안에 작성해준다
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increament}>증가시키는 버튼</button>
    </div>
    //바닐라jS에서는 onclick
    //리액트js에서는 onClick (카멜케이스 활용)
  )
}

function App() {
  return (
    <div>
      <HiComponent />
      <Counter />
    </div>
  );
}

export default App;

//export default : 다른 파일에서 사용할 수 있도록 내보내는 부분
//기본적으로 내보낼 항목을 지정하는 역할을 함
//다른 JS에서 App.js에 있는 function App을 사용할 수 있도록
//내보내기도 하지만 App.js에서 기본으로 사용할 항목을 지정하기도 함dd