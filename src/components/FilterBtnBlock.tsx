import React from 'react';
import {Button} from './Button';
import {FilterType} from '../App';

type FilterBtnBlock = {
    setFilter: (todolistId: string, filter: FilterType) => void
    todolistId: string
    filter: FilterType
}

export const FilterBtnBlock: React.FC<FilterBtnBlock> = ({filter, todolistId, setFilter}) => {

    const filterSwitcher = (filter: FilterType) => setFilter(todolistId, filter)

    return (
        <div>
            <Button
                className={filter === 'all' ? 'activeFilter' : ''}
                name={'All'}
                callback={() => filterSwitcher('all')}
            />
            <Button
                className={filter === 'active' ? 'activeFilter' : ''}
                name={'Active'}
                callback={() => filterSwitcher('active')}
            />
            <Button
                className={filter === 'completed' ? 'activeFilter' : ''}
                name={'Completed'}
                callback={() => filterSwitcher('completed')}
            />
        </div>
    );
};

