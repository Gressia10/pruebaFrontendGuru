
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {mainReducer} from './reducer'

export default createStore(mainReducer,applyMiddleware(thunk));