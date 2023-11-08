import {combineReducers} from 'redux';
import { operationsReducer } from './todoapp/reducers/operations';

export const rootReducer =  combineReducers({operationsReducer}) //all reducers are here if we have more than one