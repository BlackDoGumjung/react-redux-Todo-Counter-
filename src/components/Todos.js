import React, { useState } from 'react';

//컴포넌트 최적화를 위한 memo 사용
const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
  return (
    <li
      style={{ TextDecoderation: todo.done ? 'line-through' : 'none' }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
});

const TodoList = React.memo(function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
});

function Todos({ todos, onCreate, onToggle }) {
  //props처럼 이용 중...
  const [text, setText] = useState('');
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault(); // submit 이벤트 시 새로고침 막기
    onCreate(text);
    setText(''); // input 초기화
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={text} placeholder="할일 입력" onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  );
}

export default Todos;
