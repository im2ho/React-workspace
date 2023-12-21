import React,{useState, useEffect} from "react";
import axios from 'axios';

const DataExam = () => {
    
    const [data,setData] = useState(null);

    useEffect(()=>{
        //Axios를 활용해서 API에 GET을 요청
        axios.get('https://jsonplaceholder.typicode.com/todos')

            //데이터 로딩에 성공 > 데이터 처리
            .then(response => {
                setData(response.data);
            })
            //데이터 로딩에 실패 > 에러 표시
            .catch(error => {
                console.log('일치하는 데이터가 없습니다.', error);
            });
    },[]); //useEffect에서 함수가 한 번만 실행될 수 있도록 빈 배열을 생성
    //데이터를 가져만 오고, 수정 등 추가 변경 작업을 할 일이 없기 때문에 초기 마운트만 생각한다

    return (
        <>
            { data ? (
                <ul>
                    {data.map(item => 
                            (<li Key={item.id}> {item.title} </li>))}
                </ul>
                ) : ( <p>데이터가 존재하지 않습니다.</p> ) }
        </>
    );
}

export default DataExam;