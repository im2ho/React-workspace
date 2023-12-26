//Bach-end js를 실행하기 위한 파일 (파일명은 자유)
//함수(컴포넌트)를 사용하지 않는 것이 특징 
    // -> React처럼 return을 사용해서 div를 사용하지 X

//OracleDB를 연동하기 위해 oracledb 요청하는 함수 작성
//jdbc와 같이 중간역할을 해주는 express 요청하는 함수 작성
const oracledb = require("oracledb");
const express = require('express');

//가지고 온 express를 사용하기 위한 app 생성
const app = express();

//만약 추후 다른 도메인에서 요청이 들어올 경우
//요청을 허용해주는 cors 설치 후 생성할 것 npm i cors
const cors = require('cors');
//모든 경로에서 백엔드에 오는 요청을 사용할 수 있도록 허용
app.use(cors());

//Express로 백엔드에서 가져온 데이터를 사용할 수 있도록 설정
app.use(express.json());

//백엔드 전용 포트번호
const PORT = 5001;

//db 연결 정보
const dbConfig = {
    //user, password, connectString은 예약어
    user: 'react',
    password: 'react',
    connectString : 'localhost:1521/xe',
};

//oracle을 연결하기 위한 connection과 sql 쿼리 실행 함수 생성
//sql 쿼리와, 쿼리로 인해 발생한 변수, 추가옵션을 지정해서 데이터베이스와 상호작용
//async를 이용해서 비동기(정적) 작업을 수행
async function runQuery(sql, binds = [], options = {}) {
    let connection;

    //try{} catch(err){} finally{}
    //try 안에서 DB 연결을 실행하고, 쿼리도 실행
    //만약 오류가 발생하면 catch를 사용해서 콘솔에 에러를 출력할 수 있게 설정
    //finally 만약에 DB를 닫고싶다면 연결을 닫을 수 있도록 설정

    try{
        //await를 사용해서 비동기적으로 연결을 기다림
        connection = await oracledb.getConnection(dbConfig);
        //.execute를 사용해서 쿼리를 실행할 수 있도록 함
        //실행 결과는 result에 저장
        const result = await connection.execute(sql, binds, options);
        
        //쿼리 실행 결과에서 행 정보를 모두 반환
        //return result.rows;
        //컬럼마다 속성(?) 지정
        return result.rows.map((row) => ({
            ID: row[0],
            TASK: row[1],
            MEMO: row[2],
            DONE: row[3],
        }));
    } catch (err){
        console.log(err);
    } finally{
        if(connection){
            try{
                await connection.close();
            } catch (err) {
                console.log(err);
            }
        }
    }
}

//마지막으로 API를 사용해서 Backend 연결을 설정
app.get("/", (request, response) => {
    response.send('Backend 연결 성공');
});

//api를 활용해서 DB query에 작성한 내용 가져오기
app.get('/api/todos', async(request, response) => {
    const todos = await runQuery('SELECT * FROM todos');
    response.json(todos);
});

//우리가 연결한 PORT에 정상적으로 연결되었는지 확인하기 위한 console문 출력
app.listen(PORT, ()=>{
    console.log(`Server 시작 : http://localhost:${PORT}`);
})