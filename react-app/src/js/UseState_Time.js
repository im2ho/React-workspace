import React, { useState } from "react";

function Time() {
  const [time, setTime] = useState(1);

  const handleClick = () => {
    let newTime;
    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  };
  return (
    <div>
      <h1>현재 시간 {time}시</h1>
      <br />
      <button onClick={handleClick}>update</button>
    </div>
  );
}

export default Time;
