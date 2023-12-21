
<axios.md>

axios :    
    Java Script나 React에서 http 요청을 수행하기 위한 라이브러리
    주로 웹서버와 통신, API 호출, 데이터 가져오기 작업에 사용

사용법 : 
    npm install axios


//Axios를 활용해서 API에 GET을 요청
axios.get('https://jsonplaceholder.typicode.com/todos')

    //axios.get으로 데이터를 가져오는데 성공 > then을 사용해서 응답받을 데이터 처리
    //응답을 받을 때는 response로 서버에서 받은 응답을 표시
    //response가 실제로 요청에 관한 정보와 서버에서 실제로 반환된 데이터를 보여줌
    //response를 활용해서 전달 받은 데이터를 업데이트 후 화면에 보여주기 위해 setData 활용
    .then(response => {setData(response.data);})

    //데이터 로딩에 실패 > catch를 사용해서 에러 표시
    //error는 console.log를 활용해서 개발자들 간에 보여질 수 있도록 표기
    //eroor는 변수명일 뿐, error가 아닌 err, aaa 외에 다른 표현도 가능
    .catch(error => {('', error)});
