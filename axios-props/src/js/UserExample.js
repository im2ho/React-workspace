import React,{useState, useEffect} from "react";
import axios from "axios";

const UserList = () => {
    const[users, setUsers] = useState([]);

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setUsers(response.data);
            //response.data == SELECT ALL
        })
        .catch(error => {
            console.log('데이터 없음', error);
        });
    },[]);

    return(
        <div>
            <h1>관리자 시점</h1>
            <h2>가입 회원 정보</h2>
            <ul>
                {users.map(user=>(
                    <li key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        {/*user.address가 존재할 경우 그 하위 항목을 가져온다*/}
                        <p>{user.address && user.address.street}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList;