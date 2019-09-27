import { combineReducers } from 'redux';
import searchReducer from './components/SearchBar/searchBarReducer';

const rootReducer = combineReducers({
    search: searchReducer
});

export default rootReducer;
