import React, { useState } from "react";
import { connect } from "react-redux";
import { addUser } from "../../store/actions";

export const AddUserForm = (props) => {
    const [userName, setUserName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addUser({ name: userName, id: new Date().getTime() });
        setUserName('')
    };

    const handleUserName = (e) => {
        setUserName(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleUserName} value={userName} />
        </form>
    );
};

const mapDispatchToProps = {
    addUser,
};

export default connect(null, mapDispatchToProps)(AddUserForm);