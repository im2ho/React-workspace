//theme 불러오기 UserInfo 참고
import React, {useContext} from "react";
import ThemeContext from "./ThemeContext";

const ChildTwoComponent = () => {
    const theme = useContext(ThemeContext);

    return (
        <div>
            <p>현재 테마 : {theme}</p>
        </div>
    )
}

export default ChildTwoComponent;