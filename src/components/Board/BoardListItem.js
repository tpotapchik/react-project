import React, {useContext} from 'react';
import Context from './Context';

const BoardListItem = ({todo, index, onChange}) => {

    const {removeTodo} = useContext(Context);
    const classes = `board-list-item${todo.completed ? " completed" : ""}`;

    return (
        <li className={classes}>
            <span>
                <input
                    type="checkbox"
                    id={index}
                    checked={todo.completed}
                    onChange={() => onChange(todo.id)}
                />
                <label htmlFor={index}>{todo.title}</label>
            </span>
            <button onClick={() => removeTodo(todo.id)}>&#10008;</button>
        </li>
    )
};

export default BoardListItem;