import React, {useState} from 'react';
import classnames from 'classnames';

const allItems = 'all';
const newItems = 'new';
const completedItems = 'completed';

const BoardItemsFiltered = ({onFilter, items}) => {

    const [activeFilter, setActiveFilter] = useState(allItems);

    const filterItems = (filter) => {

        const arr = items.map(todo => {
            return Object.assign({}, todo);
        });

        switch (filter) {
            case allItems:
                arr.forEach(item => {
                    item.filterShow = true;
                });
                break;
            case newItems:
                arr.forEach(item => {
                    item.filterShow = !item.completed;
                });
                break;
            case completedItems:
                arr.forEach(item => {
                    item.filterShow = item.completed;
                });
                break;
            default:
                new Error('You have unregistered filter');
        }

        setActiveFilter(filter);
        onFilter(arr);
    };

    return (
        <div className="filters">
            <div className={classnames("filters-item", {"active": activeFilter === allItems})} onClick={() => filterItems(allItems)}>All</div>
            <div className={classnames("filters-item", {"active": activeFilter === newItems})} onClick={() => filterItems(newItems)}>New</div>
            <div className={classnames("filters-item", {"active": activeFilter === completedItems})} onClick={() => filterItems(completedItems)}>Completed</div>
        </div>
    )
};

export default BoardItemsFiltered;
