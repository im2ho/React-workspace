
import React, {useState, useEffect} from "react";

const TimeOut = () => {
    
    const [msg, setMsg] = useState(null);

    //Promise 타임아웃을 설정하는 함수 > ms로 주어진 시간이 지난 후 내부의 코드가 실행된다
    useEffect(() => {
        //ms : 몇 초만큼 지연시킬지 초 값을 설정(millseconds)
        const delay = (ms) => {
            //Fullfilled(이행)을 위해 resolve라는 변수명 작성
            //Promise는 새로운 객체를 생성해서 사용하기 대문에 new를 붙여서 사용
            return new Promise(resolve => setTimeout(resolve, ms))
        };

        //비동기 작업 진행 후 타임아웃 설정
        //함수 앞에 async 선언하면 해당 함수는 암묵적으로 추후 Promise를 반환할 것이라 설정
        const waitTimeout = async () => {
            try{
                //비동기 작업 시뮬레이션
                await delay(5000); //2초동안 대기
                setMsg('대기 종료');
            } catch(err){
                console.error('에러발생',err);
            }
        };

        waitTimeout();
    },[]);

    return(
        <div>
            {msg ? ( <h1>{msg}</h1>) : ( <h1>대기중...</h1> )}
        </div>
    );
}

export default TimeOut;