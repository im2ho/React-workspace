//ReducerCount.js
//상태 관리를 위한 Hook 중 하나로, 복잡한 상태 로직을 다룰 때 유용

/*
useState 와 useReducer

불필요하게 초기 상태값을 재생성할 경우
useReducer(현재상태, dispatch(=상태를 다른 값으로 업데이트하고 재실행시키는 함수)
                                =상태변경위한 함수, {초기값 설정})
객체나 배열 타입의 상태를 관리할 때
useState 사용
*/
import React, { useReducer } from 'react';

//Switch를 활용해서 현재 상태와 액션을 받아서 새로운 상태를 전달할 예정
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };

    case 'DECREMENT':
      return { count: state.count - 1 };
    
    case 'RESET':
        return { count: 0 };

    default:
      return state;
  }
};

const Counter = () => {
    //useReducer > 상태와 디스패치 함수를 생성
    //counterReducer :  현재 상태와 액션값을 받아서 다음 상태를 결정하는데 사용
    //위 counterReducer 함수에서는 switch문을 활용해서 값 조정을 함
                                    //첫 번재 매개변수 : counterReducer (변경된 값)
                                    //두 번째 매개변수 : {count : 0} > 초기값을 0으로 설정
    const [state, dispatch] = useReducer(counterReducer, {count:0});
    //dispatch : 액션을 발생시키는데 사용되는 함수
    //위에서 switch문 안에있는 case가 선택 되면 선택된 상태를 return해서 업데이트 확인

    return(
    <div>
        <p>count : {state.count}</p>
        <button onClick={() => dispatch({type:'INCREMENT'})}>증가</button>
        <button onClick={() => dispatch({type:'RESET'})}>초기화</button>
        <button onClick={() => dispatch({type:'DECREMENT'})}>감소</button>
    </div>
    )
};
export default Counter;