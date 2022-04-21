import axios, {AxiosResponse} from "axios";
import {put, takeEvery, call} from "redux-saga/effects"
import {FETCH_USERS, getUsersCreation} from "../store/useerReducer";
import { UsersResponse } from "../types/UserType";

const usersRequest = () => axios.get<UsersResponse>('https://reqres.in/api/users?page=1');

function* getUsersWorker() {
    try {
        const response: AxiosResponse<UsersResponse> = yield call(usersRequest);
        const users = response.data.data;
        yield put(getUsersCreation(users));
    } catch (e) {
        alert('Some error');
    }
}

export function* userWatcher () {
    yield takeEvery(FETCH_USERS, getUsersWorker)
}