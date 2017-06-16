import { combineReducers } from 'redux';
import GifsReducer from './gifs';
import ModalReducer from './modals';
import AuthReducer from './auth'
import { routerReducer } from 'react-router-redux';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: FormReducer,
  gifs: GifsReducer,
  modal: ModalReducer,
  router: routerReducer,
  auth: AuthReducer
});

export default rootReducer;