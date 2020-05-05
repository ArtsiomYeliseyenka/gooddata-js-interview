import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootSagas } from './rootSaga';
import reducers from './reducers';

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const baseMiddleware = [sagaMiddleware];
  const rootReducer = combineReducers({
    ...reducers,
  });
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...baseMiddleware)));

  sagaMiddleware.run(rootSagas);

  return store;
};
