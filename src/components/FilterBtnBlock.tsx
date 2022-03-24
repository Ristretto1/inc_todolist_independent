import React from 'react';
import {Button} from './Button';
import {FilterType} from '../App';

type FilterBtnBlockPropsType = {
    changeFilter: (filter: FilterType, id: string) => void
    filter: FilterType
    TLid: string
}

export const FilterBtnBlock: React.FC<FilterBtnBlockPropsType> = ({TLid, filter, changeFilter}) => {

    const onFilterChangeHandler = (filter: FilterType) => changeFilter(filter, TLid)

    return (
        <div>
            <Button className={filter === 'all' ? 'activeFilterButton' : ''} name={'All'} callback={() => onFilterChangeHandler('all')}/>
            <Button className={filter === 'active' ? 'activeFilterButton' : ''} name={'Active'} callback={() => onFilterChangeHandler('active')}/>
            <Button className={filter === 'completed' ? 'activeFilterButton' : ''} name={'Completed'} callback={() => onFilterChangeHandler('completed')}/>
        </div>
    );
};

