import React, {useState} from 'react';

const AddItem = ({onCreate}) => {

    const [value, setValue] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();

        if(value.trim()) {
            onCreate(value);
            setValue('');
        }
    };

    const changeValueHandler = event => setValue(event.target.value);

    const removeHandler = (event) => {
        event.preventDefault();
        setValue('');
    };

    return (
        <form className="board-form-list" onSubmit={submitHandler}>
            <div className="form-list-field">
                <input type="text" value={value} onChange={changeValueHandler} placeholder="What you need to do?"/>
                <div className={`form-list-buttons ${!value ? "hidden" : ""}`}>
                    <button className="remove-value" onClick={removeHandler} type="button">&#10008;</button>
                    <button className="add-value" type="submit">&#10004;</button>
                </div>
            </div>
        </form>
    )
};

export default AddItem;