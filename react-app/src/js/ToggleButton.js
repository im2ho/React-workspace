import React,{useState} from "react";

function ToggleButton() {
    //js 작성 공간
    const [isOn, setIsOn] = useState(false);
    const toggle = () => {
        setIsOn(!isOn);
    }
    return (
        <div>
            {/* 만약 버튼이 true라면 글자로 On이라는 글자가 표시될 수 있도록 삼항연산자를 이용해서 표기
                삼항 연산자 :
                    어떤 값 ? true 이면 나타날 상태 : false면 나타날 상태
            */}
            <p>버튼 상태 : {isOn ? 'True입니다' : 'False입니다'}</p>
            <button onClick={toggle}>버튼 상태 변경</button>
        </div>
    )
}

export default ToggleButton;