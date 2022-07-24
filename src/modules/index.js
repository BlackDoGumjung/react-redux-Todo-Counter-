import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

// rootReducer 만듦 (여러개의 리듀서 있을 때 합치는 작업 => 합쳐진 리듀서 = rootReducer)
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
