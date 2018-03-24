import {createStore, applyMiddleware, compose} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {appReducer} from './reducers/app';

const store = createStore(appReducer, compose(applyMiddleware(thunk), devToolsEnhancer()));

export default store;