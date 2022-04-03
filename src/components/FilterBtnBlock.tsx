import React from 'react';
import {Button} from './Button';
import {FilterType} from '../App';

type FilterBtnBlock ={
    setFilter: (filter: FilterType) => void
}

export const FilterBtnBlock: React.FC<FilterBtnBlock> = ({setFilter}) => {

    const filterSwitcher = (filter: FilterType) => setFilter(filter)

    return (
        <div>
            <Button name={'All'} callback={() => filterSwitcher('all')}/>
            <Button name={'Active'} callback={() => filterSwitcher('active')}/>
            <Button name={'Completed'} callback={() => filterSwitcher('completed')}/>
        </div>
    );
};

