import {createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';

import {appReducer} from './reducers/app';

const store = createStore(appReducer, devToolsEnhancer());

export default store;