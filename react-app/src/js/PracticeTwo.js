import React,{useState,useEffect,useCallback} from "react";
import '../css/PracticeTwo.css';

//todoList
function TodoList () { //const TodoList = () => {}과 동일

    //할 일 목록 배열을 위한 state 생성
    const[todos, setTodos] = useState([]);
    //할 일 추가하기 위한 input String state 생성
    const[newTodo, setNewTodo] = useState('');
    //할 일이 추가될 때마다 자동으로 할 일 개수 추가해주는 count state 생성
    const[count, setCount] = useState(0);

    //할 일이 추가될 때 사용하는 함수
    const addTodo = () => {
        setTodos([...todos,newTodo]);
        setNewTodo('');
        //할 일이 추가될 때마다 count 증가
        setCount(count + 1);
    };

    //할 일을 삭제하는 함수
    const removeTodo = (index)=>{
        const updateTodos = [...todos];
        updateTodos.splice(index,1);
        setTodos(updateTodos);

        //할 일을 삭제할 경우 count 감소
        setCount(count - 1);
    };

    //상단바 위 제목 변경
    useEffect(()=>{
        document.title=`할 일 개수 : ${count}`;
    },[count]); //count를 변경 할 때마다 useEffect를 사용함을 표시

    //useEffect Hook 추가
    useEffect(()=>{
        console.log('todolist 변경 완료 : ',todos );
    },[todos]);
    
    return (
        <div>
            <h2>To do List</h2>
            <div>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button onClick={addTodo}>할 일 추가</button>
                <ul>
                    {todos.map((todo,index)=>(
                        <li key={index}>
                            {todo}
                            <button onClick={()=>removeTodo(index)}>삭제</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

//<button> 증가하기 그리고 useCallback
function UseCallback(){
    const [count, setCount] = useState(0);
    const increaseClick = useCallback(()=>{
        setCount(count +1);
    },[count])

    return(
        <div>
            <h1>인내하십시오</h1>
            <span>참기 : {count}</span>
            <button onClick={increaseClick}>참기</button>
        </div>
    );
}

function Practice(){
    return (
        <div>
            <TodoList />
            <UseCallback />
        </div>
    );
}

export default Practice;