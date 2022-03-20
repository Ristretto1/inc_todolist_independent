import React from 'react';
import {Button} from './Button';
import {FilterType} from '../App';

type FilterButtonBlockPropsType = {
    filter: FilterType
    setFilter: (filter: FilterType) => void
}

export const FilterButtonBlock: React.FC<FilterButtonBlockPropsType> = ({filter, setFilter}) => {

    const onSwitchFilterHandler = (filter: FilterType) => {
        setFilter(filter)
    }

    return (
        <div>
            <Button
                name={'All'}
                callback={() => onSwitchFilterHandler('all')}
                className={filter === 'all' ? 'activeFilter' : ''}
            />
            <Button
                name={'Active'}
                callback={() => onSwitchFilterHandler('active')}
                className={filter === 'active' ? 'activeFilter' : ''}
            />
            <Button
                name={'Completed'}
                callback={() => onSwitchFilterHandler('completed')}
                className={filter === 'completed' ? 'activeFilter' : ''}
            />
        </div>
    );
};

