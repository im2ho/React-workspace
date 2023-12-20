import React from "react";
import ChildComponent from './ChildComponent';

function ParentComponent() {
    const data = "이것은 부모 컴포넌트입니다.";
    
    //위에서 정의한 data를 ChildComponent로 넘겨준다
    return <ChildComponent message={data} />;
                            //message 및 data는 약속어 X
}

export default ParentComponent;