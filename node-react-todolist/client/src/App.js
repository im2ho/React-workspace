import React, {useState, useEffect} from 'react';
import axios from "axios";

function App() {
  
  const [todos, setTodos] = useState([]);

  /*
  useEffect(() => {
    fetch('/')
    .then((res) => res.json())
    .then((data) => setTodos(data))
    .catch((error) => console.error('Error!', error));
  });
  */

   //npm i axios
   //server에서 Express를 활용해서 todos 데이터 가져오기
   useEffect(() => {
    axios.get('http://localhost:5001/api/todos')
      .then(response => {
        setTodos(response.data);
      })
      .catch(err => {
        console.log("Error!", err);
      });
   },[]);
  
  return (
    <div>
      <h1>To Do List</h1>
      <ul>
        <table border={1}>
          <thead>
            <th>할 일</th>
            <th>memo</th>
            <th>Check</th>
          </thead>
          <tbody>
            {todos.map(todo => (
              <tr key={todo.ID}>
                <td>{todo.TASK}</td>
                <td>{todo.MEMO}</td>
                <th>{todo.DONE}</th>
              </tr>
            ))}
          </tbody>
        </table>
        {/*<li>
          {todos.map(todo => (
              <li key={todo[0]}>{todo[1]} : {todo[2]}</li>
            ))}
        </li>*/}
      </ul>
    </div>
  );
}

export default App;
