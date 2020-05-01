import React, {useState} from 'react';
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

const BoardView = () => {

    const [todos, setTodoItems] = useState(defaultItems);

    const toggleTodo = (id) => {
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
        setTodoItems(todos.filter(todo => todo.id !== id));
    };

    const addTodo = (title) => {

        setTodoItems(todos.concat([
            {
                title,
                id: Date.now(),
                completed: false,
                filterShow: true
            }
        ]));
    };

    const onFilterItems = (arr) => {
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
