import { createStore } from 'redux';
//store 만들어주는 함수 (store = 하나만 만들 수 있음)

//리덕스에서 관리할 state 정의
const initialState = {
  counter: 0,
  text: '',
  list: [],
};

//action 타입
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

//action 생성 함수 정의 (위와 아래는 같다)
// function increase(){
//   return {
//     type: INCREASE
//   };
// }
const increase = () => ({
  type: INCREASE,
});

const decrease = () => ({
  type: DECREASE,
});

const changeText = (text) => ({
  type: CHANGE_TEXT,
  text, // action 안에는 type외 다른 것도 추가할 수 있음
});

const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

//reducer 만들기
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}
switch (action.type) {
}

//store 만들기
const store = createStore(reducer);

// store 안에 들어있는 상태 바뀔 때마다 호출되는 listener 함수
const listener = () => {
  const state = store.getState();
};
const unsubscribe = store.subscribe(listener);

//action을 dispatch
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('hi!'));
store.dispatch(addToList)({ id: 1, text: 'wow' });
//redux 안의 state는 액션이 dispatch 됨에 따라 업데이트 > listner 함수 호출
