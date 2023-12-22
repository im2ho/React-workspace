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

//useContext
//부모 컴포넌트에서 createContext로 생성한 Context 객체를 
//자식 컴포넌트에서 쉽게 사용할 수 있도록 만들어진 Hook