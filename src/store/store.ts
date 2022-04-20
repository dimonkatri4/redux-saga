import {combineReducers, legacy_createStore as createStore} from "redux";
import {countReducer} from "./countReducer";
import {userReducer} from "./useerReducer";


const rootReducers = combineReducers({
    count: countReducer,
    users: userReducer
})

export const store = createStore(rootReducers);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;