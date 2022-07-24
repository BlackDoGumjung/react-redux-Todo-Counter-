import React from 'react';

//프리젠테이셔널 컴포넌트 : 리덕스 스토어에 접근x, 필요한 값 or 함수를 props로만 받아와서 사용하는 컴포넌트

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) { //필요한 값, 함수를 props로 받아서 사용
  const onChange = (e) => {
    //e.targer.value 값은 string이므로 number로 변경해줘야함
    onSetDiff(parseInt(e.target.value, 10));
  };
  return (
    <div>
      <h1></h1>
      <div>
        <input type="number" value={diff} min="1" onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}

export default Counter;
