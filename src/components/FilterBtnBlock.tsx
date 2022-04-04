import React from 'react';
import {Button} from './Button';
import {FilterType} from '../App';

type FilterBtnBlockPropsType = {
    setFilter: (todolistId: string, filter: FilterType) => void
    filter: FilterType
    todolistId: string
}

export const FilterBtnBlock: React.FC<FilterBtnBlockPropsType> = ({todolistId, filter,setFilter}) => {

    const onChangeFilterHandler = (filter: FilterType) => setFilter(todolistId, filter)

    return (
        <div>
            <Button
                name={'All'}
                callback={() => onChangeFilterHandler('all')}
                className={filter === 'all' ? 'activeFilterBtn' : ''}
            />
            <Button
                name={'Active'}
                callback={() => onChangeFilterHandler('active')}
                className={filter === 'active' ? 'activeFilterBtn' : ''}
            />
            <Button
                name={'Completed'}
                callback={() => onChangeFilterHandler('completed')}
                className={filter === 'completed' ? 'activeFilterBtn' : ''}
            />
        </div>
    );
};

