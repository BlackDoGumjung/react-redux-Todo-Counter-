//컨테이너 컴포넌트 만들기
//리덕스 스토어 상태 조회, 액션 디스패치할 수 있는 컴포넌트
//다른 프리젠테이셔널 컴포넌트 불러서 사용

//프리젠테이셔널 컴포넌트, 컴테이너 컴포넌트 분리 작업

import React from 'react';
import { useSelctor, useDispatch } from 'react-redux'; //useSelector : redux store의 상태 호출하는 hook
import Counter from '../components/Counter';
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer() {
  // const { number, diff } = useSelctor((state) => ({
  //   // 여기의 state는 store내의 state 전부임
  //   number: state.counter.number,
  //   diff: state.counter.diff,
  // }), shallowEqual); // 두번째 인자에 shallowEqual 함수를 전달해주는 것

  //위의 코드 최적화를 위해선 useSelector 를 여러번 사용하거나 위 함수 두번째 인자에 shallowEqual 함수 사용
  const number = useSelector((state) => state.counter.number);
  const diff = useSelector((state) => state.counter.diff);

  //useDispatch : redux store의 dispatch를 함수에서 사용할 수 있게 해주는 hook
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = () => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
