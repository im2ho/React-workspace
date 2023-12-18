import React, {useState} from "react";
import image1 from '../img/image1.jpg';
import image2 from '../img/image2.jpg';
import image3 from '../img/image3.jpg';

//이미지가 2개일 경우
function ImageChange() {
    //useState() : 파일 경로가../img/image1.jpg인 image1으로 설정
    const [imageSrc, setImageSrc] = useState(image1);
    const [isClick, setIsClick] = useState(true);
    //이미지를 클릭할 때마다 이미지가 변경될 수 있도록 클릭함수 만들기
    const handleClick = () => {
        if(isClick) { //isClick = true일 경우
            setImageSrc(image2);
            setIsClick(false);
        } else { //isClick = false일 경우
            setImageSrc(image1);
            setIsClick(true);
        }
    }
    return (
        <div>
            <img src={imageSrc} onClick={handleClick} style={{height:"50vmin"}}></img>
        </div>
    );
}

//이미지가 3개일 경우
function ImageChangee() {
    //useState() : 파일 경로가../img/image1.jpg인 image1으로 설정
    const [imageSrc, setImageSrc] = useState(image1);

    //== : 동등연산자 > 자동으로 형 변환을 수행하기 때문에 데이터 타입이 다를 경우에도 변환을 일부 시도하기도 함
    //=== : 일치연산자로 값과 데이터 타입이 모두 같아야 true를 변환
    
    //이미지를 클릭할 때마다 이미지가 변경될 수 있도록 클릭함수 만들기
    const handleClick = () => {
        if(imageSrc===image1) { //isClick = true일 경우
            setImageSrc(image2);
        } else if(imageSrc === image2) { //isClick = false일 경우
            setImageSrc(image3);
        } else {
            setImageSrc(image1);
        }
    }
    return (
        <div>
            <img src={imageSrc} onClick={handleClick} style={{height:"50vmin"}}></img>
        </div>
    );
}

export default ImageChangee;