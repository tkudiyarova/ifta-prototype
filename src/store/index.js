import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'

import { reducer } from '../reducers';
import { iftaSaga } from '../sagas';

export function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = applyMiddleware(sagaMiddleware);

  const store = createStore(
    reducer,
    composeWithDevTools(middleware)
  );
  sagaMiddleware.run(iftaSaga);
  return store;
}
