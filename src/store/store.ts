import {combineReducers, legacy_createStore as createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import {countReducer} from "./countReducer";
import {userReducer} from "./useerReducer";
import {countWatcher} from "../saga/countSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducers = combineReducers({
    count: countReducer,
    users: userReducer
})

export const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(countWatcher)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;