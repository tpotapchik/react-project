import React, {useState, useEffect} from 'react';
import Context from './Context';
import BoardList from './BoardList';
import AddItem from './AddItem';
import BoardItemsFiltered from './BoardItemsFiltered';
import './BoardView.scss';

const defaultItems = [
    {id: 1, completed: true, title: 'Learn html', filterShow: true},
    {id: 2, completed: false, title: 'Learn css', filterShow: true},
    {id: 3, completed: false, title: 'Learn js', filterShow: true},
];

const todolistSorage = 'todolist';

const getInitialData = () => {
    let data = localStorage.getItem(todolistSorage);
    return data !== null ? JSON.parse(data) : defaultItems;
};

const BoardView = () => {

    const [todos, setTodoItems] = useState(getInitialData());
    const [filtered, setFiltered] = useState(false);

    const toggleTodo = (id) => {
        setFiltered(false);
        setTodoItems(
            todos.map(todo => {
                const newItem = Object.assign({}, todo);
                if (newItem.id === id) {
                    newItem.completed = !newItem.completed
                }
                return newItem;
            })
        );
    };

    const removeTodo = (id) => {
        setFiltered(false);
        setTodoItems(todos.filter(todo => todo.id !== id));
    };

    const addTodo = (title) => {
        setFiltered(false);
        setTodoItems(todos.concat([
            {
                title,
                id: Date.now(),
                completed: false,
                filterShow: true
            }
        ]));
    };

    useEffect(() => {
        if (!filtered) {
            saveStateToLocalStorage();
        }
    });

    const saveStateToLocalStorage = () => {
        localStorage.setItem(todolistSorage, JSON.stringify(todos));
    };

    const onFilterItems = (arr) => {
        setFiltered(true);
        setTodoItems(arr);
    };

    return (
        <Context.Provider value={{removeTodo}}>
            <div className="wrapper">
                <h2>These items you have in your list:</h2>

                <AddItem onCreate={addTodo}/>

                {todos.length > 0 ?
                    <>
                    <BoardList todos={todos} onToggle={toggleTodo}/>
                    <BoardItemsFiltered onFilter={onFilterItems} items={todos}/>
                    </> :
                    <p>You have nothing to do in list</p>
                }
            </div>
        </Context.Provider>
    )
};

export default BoardView;
