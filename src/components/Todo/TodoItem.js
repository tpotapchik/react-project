import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import TodoContext from './TodoContext';

function TodoItem({todo, index, onChange}) {
    const { removeTodo } = useContext(TodoContext);
    const classes = [];

    if (todo.completed) {
        classes.push('done');
    }

    return (
        <li>
            <span className={classes.join(' ')}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onChange(todo.id)}/>
                <b>{index + 1}</b>
                &nbsp;
                {todo.title}
            </span>
            <button onClick={(event)=>removeTodo(todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
};

export default TodoItem;