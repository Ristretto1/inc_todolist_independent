import React from 'react';
import {Button} from './Button';
import {FilterType} from '../App';

type FilterBtnBlock = {
    setFilter: (todolistId: string, filter: FilterType) => void
    todolistId: string
}

export const FilterBtnBlock: React.FC<FilterBtnBlock> = ({todolistId, setFilter}) => {

    const filterSwitcher = (filter: FilterType) => setFilter(todolistId, filter)

    return (
        <div>
            <Button name={'All'} callback={() => filterSwitcher('all')}/>
            <Button name={'Active'} callback={() => filterSwitcher('active')}/>
            <Button name={'Completed'} callback={() => filterSwitcher('completed')}/>
        </div>
    );
};

