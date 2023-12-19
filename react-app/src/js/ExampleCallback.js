import React, {useCallback,useState} from "react";

function ExamCallback() {
    const [count, setCount] = useState(0);
    const increaseClick = useCallback(()=>{
        setCount(count + 1);
    }, [count])
    return(
        <div>
            <h2>Count : {count}</h2>
            <button onClick={increaseClick}>더하기</button>
        </div>
    )
}

export default ExamCallback;
