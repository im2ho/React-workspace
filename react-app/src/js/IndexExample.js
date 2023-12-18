import React,{useState} from "react";

function IndexExample() {
    //useState에서 빈 글자를 나타낼 때 '', "" 상관 X
    const [inputText, SetInputText] = useState('');
    //abc.target.value
        //abc : 사용자가 입력하거나 선택했을 때 어떤 값을 입력하고 선택했는지를 담기위한 객체 (바구니같은 개념)
        //target : 사용자 작성하거나 입력한 html 입력란을 나타냄
        //value : 사용자가 입력한 값을 가져옴
        //target.value select나 체크박스 button, input 등 어디서든 사용 가능
    const handleChange = (e) => {
        SetInputText(e.target.value);
    }
    return(
        <div>
            <input type="text" value={inputText} onChange={handleChange}/>
            <p>내가 작성한 글 : {inputText}</p>
        </div>
    )
}

export default IndexExample;