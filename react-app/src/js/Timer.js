//UseEffect_Cleanup.js와 이어짐
import React, {useEffect} from "react";

const Timer = (props) => {

    //타이머가 처음 마운트 되었을 때, setInterval에 인자로 들어간 콜백 함수를 1초마다 한 번씩 계속 실행
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("타이머 실행 중...");
        },1000);

        return () => {
            //Timer 컴포넌트가 언마운트 될 때 setInterval을 끝내주는 작업
            clearInterval(timer);
            console.log('타이머가 종료되었습니다');
        }
    },[]);

    return(
        <div>
            <span>타이머를 시작합니다. 콘솔을 확인하세요!</span>
        </div>
    );
}

export default Timer;