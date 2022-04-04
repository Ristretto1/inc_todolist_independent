import React from 'react';
import {Button} from './Button';
import {FilterType} from '../App';

type FilterBtnBlock = {
    setFilter: (filter: FilterType) => void
    filter: FilterType
}

export const FilterBtnBlock: React.FC<FilterBtnBlock> = ({filter, setFilter}) => {

    const FilterSwitcher = (filter: FilterType)=> setFilter(filter)

    return (
        <div>
            <Button
                name={'All'}
                callback={() => FilterSwitcher('all')}
                className={filter === 'all' ? 'activeFilterBtn' : ''}
            />
            <Button
                name={'Active'}
                callback={() => FilterSwitcher('active')}
                className={filter === 'active' ? 'activeFilterBtn' : ''}
            />
            <Button
                name={'Completed'}
                callback={() => FilterSwitcher('completed')}
                className={filter === 'completed' ? 'activeFilterBtn' : ''}
            />
        </div>
    );
};

