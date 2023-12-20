//Timer.js와 이어집니다
import React,{useState} from "react";
import Timer from "../Timer";

function CleanUp() {

    const [showTimer, setShowTimer] = useState(false);

    return(
        <div>
            {/*showTimer가 true일 때만 Timer컴포넌트를 보임*/}
            {showTimer && <Timer />}{/*타이머를 시작합니다. 콘솔을 확인하세요! */}
            <button onClick={()=>setShowTimer(!showTimer)}>Toggle Timer</button>
        </div>
    );
}

export default CleanUp;