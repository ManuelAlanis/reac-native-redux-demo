import { combineReducers } from 'redux';
import superheroesReducer from './superheroesReducer.js';

export default combineReducers({
    superheroes: superheroesReducer 
});
