import {createStore, compose} from 'redux';
import reducer from '../reducers/index';
import DevTools from '../utils/DevTools';

const store = createStore(
    reducer,
    compose(
        DevTools.instrument()
    )
);

export default store;