import {combineReducers} from 'redux';
import {toDo} from './toDo';
import {counter} from './counter';

export default combineReducers({
    counter,
    toDo,
});