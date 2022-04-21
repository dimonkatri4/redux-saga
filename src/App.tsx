import React from 'react';
import './App.css';
import {RootState} from "./store/store";
import {asyncDecrementCreator, asyncIncrementCreator} from "./store/countReducer";
import {deleteUser, fetchUsers} from "./store/useerReducer";
import {User} from "./types/UserType";
import {useDispatch, useSelector} from "react-redux";

function App() {

    const dispatch = useDispatch();
    const count = useSelector((state:RootState) => state.count.count);
    const users = useSelector((state:RootState) => state.users.users);

    return (
        <div className="app">
            <div className="count">{count}</div>
            <div className="buttons">
                <button className="btn" onClick={() => dispatch(asyncIncrementCreator())}>Add (+1)</button>
                <button className="btn" onClick={() => dispatch(asyncDecrementCreator())}>Delete (-1)</button>
                <button className="btn" onClick={() => dispatch(fetchUsers())}>Get users</button>
            </div>
            {users.length ?
                <div className="users">
                    {users.map((user:User) =>
                        <div className="user" key={user.id} onClick={() => dispatch(deleteUser(user.id))}>
                            {user.first_name}
                        </div>
                    )}
                </div> :
                <div className="users">No users</div>
            }
        </div>
    );
}

export default App;
