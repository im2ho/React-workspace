import React, {useState, useEffect} from "react";

//컴포넌트가 function, class로 묶어 재사용할 수 있도록 만들어준 함수나 클래스
function AnimalSound(){
    //script 작성
    const [animal, setAnimal] = useState('cat');
    useEffect(()=>{
        //연결(마운트)될 때 바로 실행이 되는 부분
        //console.log 안에 함수나 변수명을 사용하고자 할 때는 `` 사용
        console.log(`${animal} : 웨옭`)
        //함수 연결이 정리(언마운트)될 때 실행되는 함수 (끝날때)
        return() => {
            console.log('종료');
            //console.log(`${animal}`);
        };
        //[animal]: animal이라는 값이 변경 될 때마다 useEffect 안에 작성한 내부 코드를 다시 실행
        //추후에는 []에 animal만 들어있는 것이 아니라 여러 변수들이 들어있을 수 있기 때문에 배열로 묶어줌
    }, [animal]); //animal이 바뀔 때마다 실행
    
    const handleSound = (newAnimal) => {
        setAnimal(newAnimal);
    }

    return(
        <div>
            <h1>동물농장</h1>
            <p>{animal}가 말합니다</p>  
            <button onClick={()=>handleSound('cat')}>고양이</button>
            <button onClick={()=>handleSound('june')}>쭌이</button>
            {/*<button onClick={()=>handleSound('summer')}>여름이</button>*/}
        </div>
    );
}

export default AnimalSound;
//('b'+'a'+ +'a'+'a').toLowerCase;