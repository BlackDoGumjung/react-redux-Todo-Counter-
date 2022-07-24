import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';

function TodosContainer() {
  //useSelector는 객체 반환할 필요 x, 한종류값만 원하면 바로 반환 
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const onCreate = text => dispatch(addTodo(text));
  const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]); 
  // 최적화를 위한 useCallback

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

export default TodosContainer;