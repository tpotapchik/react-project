import React from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoContext from './TodoContext';

function TodoView() {
    const [todos, setTodos] = React.useState([
        {id: 1, completed: false, title: 'Buy milk'},
        {id: 2, completed: true, title: 'Buy water'},
        {id: 3, completed: false, title: 'Buy bread'},
    ]);

    function toggleTodo(id) {
        setTodos(todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        )
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        setTodos(todos.concat([
            {
                title,
                id: Date.now(),
                completed: false
            }
        ]))
    }

    return (
        <TodoContext.Provider value={{removeTodo: removeTodo}}>
            <div className="wrapper">
                <h2>List</h2>
                <AddTodo onCreate={addTodo}/> {todos.length > 0 ?
                <TodoList todos={todos} onToggle={toggleTodo}/> : <p>No todos!</p>}
            </div>
        </TodoContext.Provider>
    )
}

export default TodoView;
