import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import userReducer from './reducers/userReducer';
import dashboardReducer from './reducers/dashBoardReducer';
import postReducer from './reducers/postReducer';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ userReducer, dashboardReducer, postReducer });

const composeEnhancers = 
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) 
    : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);

export default store;