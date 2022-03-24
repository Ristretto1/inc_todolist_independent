import React from 'react';
import {Button} from './Button';
import {FilterType} from '../App';

type FilterBtnBlockPropsType = {
    setFilter: (filter: FilterType) => void
    filter: FilterType
}

export const FilterBtnBlock: React.FC<FilterBtnBlockPropsType> = ({filter, setFilter}) => {

    const onFilterChangeHandler = (filter: FilterType) => setFilter(filter)

    return (
        <div>
            <Button className={filter === 'all' ? 'activeFilterButton' : ''} name={'All'} callback={() => onFilterChangeHandler('all')}/>
            <Button className={filter === 'active' ? 'activeFilterButton' : ''} name={'Active'} callback={() => onFilterChangeHandler('active')}/>
            <Button className={filter === 'completed' ? 'activeFilterButton' : ''} name={'Completed'} callback={() => onFilterChangeHandler('completed')}/>
        </div>
    );
};

