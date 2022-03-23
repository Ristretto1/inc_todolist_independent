import React from 'react';
import {Button} from './Button';
import {FilterType} from '../App';

type FilterBtnBlockPropsType = {
    setFilter: (filter: FilterType) => void
    filter: FilterType
}

export const FilterBtnBlock: React.FC<FilterBtnBlockPropsType> = ({filter, setFilter}) => {

    const onSwitchFilterBtnHandler = (filter: FilterType) => {
        setFilter(filter)
    }

    return (
        <div>
            <Button
                name={'All'}
                callback={() => onSwitchFilterBtnHandler('all')}
                className={filter === 'all' ? 'activeFilterBtn' : ''}
            />
            <Button
                name={'Active'}
                callback={() => onSwitchFilterBtnHandler('active')}
                className={filter === 'active' ? 'activeFilterBtn' : ''}
            />
            <Button
                name={'Completed'}
                callback={() => onSwitchFilterBtnHandler('completed')}
                className={filter === 'completed' ? 'activeFilterBtn' : ''}
            />
        </div>
    );
};

