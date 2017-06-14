import { combineReducers } from 'redux';
import GifsReducer from './gifs';
import ModalReducer from './modals';

const rootReducer = combineReducers({
  gifs: GifsReducer,
  modal: ModalReducer
});

export default rootReducer;