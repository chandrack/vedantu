import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer';
import ReduxThunk from 'redux-thunk';

export default function configureStore() {
  let store = createStore(rootReducer, applyMiddleware(ReduxThunk));
  return store
};