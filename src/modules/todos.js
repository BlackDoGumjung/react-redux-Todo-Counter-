//액션 타입
const ADD_TODO = todos / ADD_TODO;
const TOGGLE_TODO = todos / TOGGLE_TODO;

//액션 생성함수 선언
let nextId = 1;
export const addTodos = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text,
  },
});

export const toggleTodos = (id) => ({
  type: TOGGLE_TODO,
  id
});

//초기상태 선언 (어느 타입이건 상관없음, 객체일 필요는 없음)
const initialState = [
  {
    id: 1,
    text: '예시',
    done: false,
  },
];

export default function todos(state =initialState, action){
  switch(action.type){
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id === action.id ? {...todo, done: !todo.done} : todo //id일치하면 done값 반전, 아니면 그대로
      )
    default:
      return state; 
  }
}