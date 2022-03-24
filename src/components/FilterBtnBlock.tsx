import React from 'react';
import {Button} from './Button';
import {FilterType} from '../App';

type FilterBtnBlockPropsType = {
    setFilter: (filter: FilterType) => void
}

export const FilterBtnBlock: React.FC<FilterBtnBlockPropsType> = ({setFilter}) => {

    const onFilterChangeHandler = (filter: FilterType) => setFilter(filter)

    return (
        <div>
            <Button name={'All'} callback={() => onFilterChangeHandler('all')}/>
            <Button name={'Active'} callback={() => onFilterChangeHandler('active')}/>
            <Button name={'Completed'} callback={() => onFilterChangeHandler('completed')}/>
        </div>
    );
};

