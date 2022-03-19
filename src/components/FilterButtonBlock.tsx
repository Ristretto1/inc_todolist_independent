import React from 'react';
import {Button} from './Button';
import {FilterType} from '../App';

type FilterButtonBlockPropsType = {
    setFilter: (filter: FilterType) => void
    filter: FilterType
}

export const FilterButtonBlock: React.FC<FilterButtonBlockPropsType> = ({setFilter, filter}) => {

    const onClickSwitchFilter = (filter: FilterType) => {
        setFilter(filter)
    }

    return (
        <div>
            <Button
                className={filter === 'all' ? 'activeFilterButton' : ''}
                name={'All'}
                callback={() => onClickSwitchFilter('all')}
            />
            <Button
                className={filter === 'active' ? 'activeFilterButton' : ''}
                name={'Active'}
                callback={() => onClickSwitchFilter('active')}
            />
            <Button
                className={filter === 'completed' ? 'activeFilterButton' : ''}
                name={'Completed'}
                callback={() => onClickSwitchFilter('completed')}/>
        </div>
    );
};

