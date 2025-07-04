import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import userReducer from './reducers/userReducer';
import dashboardReducer from './reducers/dashBoardReducer';
import postReducer from './reducers/postReducer';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ userReducer, dashboardReducer, postReducer });
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;