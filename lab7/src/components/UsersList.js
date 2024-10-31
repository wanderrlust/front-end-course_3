import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../actions/userActions";

const UsersList = () => {
    const dispatch = useDispatch();
    const {users, loading, error} = useSelector(state => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    <div className="name">{user.first_name} {user.last_name}</div>
                    <img src={user.avatar} alt="" />
                </li>
            ))}
        </ul>
    )
}

export default UsersList;