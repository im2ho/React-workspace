import React,{useState, useEffect} from "react";

function Count() {

    const [count,setCount] =useState(1);
    const [name, setName] = useState('');

    const handleCountUpdate = () => {
        setCount(count + 1);
    };

    //input에 뭔가 입력 할 때마다 계속 useEffect 실행
    const handleInputChange = (e) => {
        setName(e.target.value);
    }

    //렌더링 될 때마다 매번 실행 (컴포넌트가 화면에 렌더링 된 직후 실행)
    //count야 괜찮지만, name의 경우 input에 값을 입력하는 과정에서 계속 렌더링이 되기 때문에 무거운 작업에는 비효율적
    useEffect(()=>{
        console.log('렌더링 완료');
    });

    //dependency Array에 [count]를 추가해줌으로써 첫 렌더링 및 count 할 때만 실행된다
    useEffect(()=>{
        console.log('Count 업데이트');
    },[count]);

    //'첫' 렌더링에만 실행되는 useEffect
    useEffect(()=>{
        console.log('Mounted');
    },[]);

    return(
        <div>
            <p>Count : {count}</p>
            <button onClick={handleCountUpdate}>Update</button><br />
            <input type="text" value={name} onChange={handleInputChange}/>
            <p>name:{name}</p>
        </div>
    );
}

export default Count;