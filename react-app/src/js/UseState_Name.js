import React, { useState } from "react";

// const heavyWork = () => {

// }

function Names() {

    const [names, setNames] = useState([]);
    const [input, setInput] = useState('');

    //이벤트(e)를 인자로 받고 setInput을 통해서 input State를 업데이트하는 함수
    const handleInputChange = (e) => {
        //이벤트(e) 안에있는 target 안에있는 value를 새로운 input으로 지정
        setInput(e.target.value);
    }

    //console.log(input); //input에 입력하는 값이 변할 때마다 실시간 업데이트
  
    //업로드를 처리해주는 함수
    const handleUpload = () => {
        //콜백함수 전달
                //prevState : 업데이트 이전의 State
        setNames((prevState) => {
            console.log('prevState : ', prevState);
            //return : 새롭게 업데이트 될 인자
            return [input, ...prevState];
        });
    }

    return (
    <div>
        {/*onChange : 사용자가 입력을 할 때마다 핸들링을 해줄 함수(handleInputChange)를 호출*/}
        <input type="text" value={input} onChange={handleInputChange}/>
        <button onClick={handleUpload}>Upload</button>
        {names.map((name,idx) => {
            return <p key={idx}>{name}</p>;
        })}
    </div>
    );
}

export default Names;
