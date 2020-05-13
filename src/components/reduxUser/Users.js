import React from "react";
import { connect } from "react-redux";
import { deleteUser, clearUsers } from "../../store/actions";

export const Users = ({ users, deleteUser, clearUsers }) => {
    return (
        <>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <span>{user.name}</span>
                    <button onClick={()=>deleteUser(user.id)}>delete</button>
                </li>
            ))}
        </ul>
        <button onClick={()=>clearUsers()}>delete All</button>
        </>
    );
};

const mapStateToProps = (state) => ({
    users: state.users,
});

const mapDispatchToProps = {
    deleteUser,
    clearUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);