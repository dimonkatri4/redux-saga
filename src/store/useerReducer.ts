import { User } from "../types/UserType";

const GET_USERS = 'GET_USERS';
const DELETE_USER = 'DELETE_USER';

const initialState = {
    users: [] as User[] | []
}

export const userReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case GET_USERS:
            return {...state, users: action.users}
        case DELETE_USER:
            return {...state, users: state.users.filter(user => user.id != action.id)}
    }
    return state
}

type ActionTypes = GetUserType | DeleteUserType;

interface GetUserType {
    type: typeof GET_USERS
    users: User[]
}

interface DeleteUserType {
    type: typeof DELETE_USER
    id:number
}
export const getUsersCreation = (users: User[]) => ({type: GET_USERS, users});
export const deleteUser = (id: number) => ({type: DELETE_USER, id});