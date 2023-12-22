import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const NumberGuessingGame = () => {

    const randomNumber = () => {
        return Math.floor(Math.random() *100) + 1;
        //+1을 붙여주지 않을경우 (Math.random()*50) 범위 0~49로 설정
    };

    const [targetNumber, setTargetNumber] = useState(randomNumber());
    const [userGuess, setUserGuess] = useState('');
    const [message, setMessage] = useState('');

    //횟수제한
    const [attempts, setAttempts] = useState(5);

    //작성한 숫자 기록
    const [guessHistory, setGuessHistory] = useState([]);

    //숫자값이 들어올 때마다 값 변경
    const inputChange = (e) => {
        setUserGuess(e.target.value);
    };

    //useEffect를 활용해서 게임 횟수 제한
    useEffect(()=>{
        //횟수가 끝났을 경우
        if(attempts === 0){
            setMessage(`Game Over! 정답은 ${targetNumber} 였습니다 메롱`);
            //targetNumber 재설정, 횟수 초기화, 사용자 작성 기록 지우기
            setTargetNumber(randomNumber());
            setAttempts(5);
            setGuessHistory([]);
        } 
    },[attempts, targetNumber])

    //숫자값 전달
    const inputSubmit = (e) => {
        //숫자를 맞추기 전에 페이지가 다시 로딩되는 것을 방지 (자동 새로고침 방지)
        e.preventDefault();
        //사용자가 입력한 값을 숫자로 변환해주는 역할
        const guess = parseInt(userGuess, 10); //10진수 설정

        // NaN : Not a Number
        if(isNaN(guess)){
            setMessage('숫자만 입력이 가능합니다');
        } else {

            //사용자가 작성한 숫자값을 기록하는 함수 생성
            const newGuessHistory = [...guessHistory, guess];
            setGuessHistory(newGuessHistory);

            if(guess === targetNumber) {
                setMessage(`정답입니다 숫자는 : ${targetNumber}`);
                
                //숫자를 맞춰기 때문에 초기화 작업 진행
                setTargetNumber(randomNumber());
                setAttempts(5);
                setGuessHistory([]);
            } else {
                //숫자가 틀렸을 때 횟수를 차감
                const remainAttempts = attempts - 1;
                setAttempts(remainAttempts);

                if(remainAttempts === 0){
                    //횟수 다 썼을 경우 게임설정 초기화
                    setMessage(`Game Over! 정답은 ${targetNumber} 였습니다 메롱`);
                    setTargetNumber(randomNumber());
                    setAttempts(5);
                    setGuessHistory([]);
                } else {
                    setMessage(guess < targetNumber ? 'Up' : 'Down');
                }
            }
        }
        //숫자를 맞출 때마다 input값이 지워질 수 있도록 초기화 설정
        setUserGuess('');
    };

    return(
        <div className="m-5 p-3 card">
            <h1>숫자 맞추기 게임</h1>
            <p>1부터 100 사이 숫자 맞추기</p>
            <form onSubmit={inputSubmit}>
                <input 
                    className="w-25"
                    type='number'
                    value={userGuess}
                    onChange={inputChange}
                    placeholder="숫자를 입력하세요"
                    min="1"
                    max="100"  
                    required
                />
                <button type='submit' className="ms-2">제출하기</button>
            </form>
            <div>
                <p>남은 기회 : {attempts}</p>
                <p>입력한 숫자 : {guessHistory.join(',')}</p>
            </div>
            {message && <div>{message}</div>}
        </div>
    )
};

export default NumberGuessingGame;