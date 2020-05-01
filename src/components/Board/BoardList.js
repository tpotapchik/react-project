import React from 'react';
import BoardListItem from './BoardListItem';

const BoardList = ({todos, onToggle}) => {

    const isFilterShow = () => {
        const todosItems = todos.filter(todo => todo.filterShow);
        return todosItems.length > 0;
    };

    return (
        <>
        {
            isFilterShow() ?
                <ul className="board-list">
                    {todos.filter(todo => todo.filterShow).map((todo, index) => {
                        return (
                            <BoardListItem
                                todo={todo}
                                key={todo.id}
                                index={index}
                                onChange={onToggle}
                            />
                        )
                    })}
                </ul> : <p>You have no items to satisfy this filter</p>
        }
        </>
    )
};

export default BoardList;
