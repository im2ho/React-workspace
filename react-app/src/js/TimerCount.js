import React, {useState,useEffect} from "react";

//방법1
function Timer() {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title = `남은 티켓 ${count}`;
    });
    return (
        <div>
            <h1>타이틀을 보시라</h1>
            <p>{count}</p>
            <button onClick={()=>setCount(count-1)}>Click</button>
        </div>
    )
}

//방법2 (방법1에서 button클릭에 적용한 onClick은 const increament로 작성한 메서드와 동일한 효능을 지닌다)
function AddCount(){
    const [count, setCount] = useState(0);
    const increament = () => {
        setCount(count +1);
    }
    return(
        <div>
            <h1>숫자 : {count}</h1>
            <button onClick={increament}>Click</button>
        </div>
    )
}

function Count(){
    return(
        <div>
            <AddCount />
        </div>
    )
}

export default Count;