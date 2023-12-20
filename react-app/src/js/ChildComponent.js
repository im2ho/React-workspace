import React from "react";

//방법1
//const ChildComponent = (props) => <div>{props.message}</div>

//방법2 (둘이 결과는 똑같음)
function ChildComponent(props) {
                //props는 비약속어이지만, 관습적으로 쓰는 변수명이다.
                //prop는 그 자체로 부모에게 전달 받아서 데이터를 사용한다는 의미를 내포함
    return <h1>{props.message}</h1>;
}

export default ChildComponent;

//function과 const로 작정한 함수에는 큰 차이 X (결과 동일)
//const로 작성한 함수는 함수 표현식(Function Expression)이라고 부름
    //주로 간단하게 함수를 표현할 때 사용
//function으로 작성한 함수는 함수 선언식(Function Declaration) 이라고 부름