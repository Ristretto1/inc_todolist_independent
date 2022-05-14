import React from 'react';
import {Button} from './Button';
import {FilterType} from '../App';

type FilterBtnBlockPropsType = {
    switchFilter: (value: FilterType) => void
}

export const FilterBtnBlock: React.FC<FilterBtnBlockPropsType> = ({switchFilter}) => {

    const onSwitchFilterHandler = (value: FilterType) => switchFilter(value)

    return (
        <div>
            <Button name={'All'} callback={() => onSwitchFilterHandler('all')}/>
            <Button name={'Active'} callback={() => onSwitchFilterHandler('active')}/>
            <Button name={'Completed'} callback={() => onSwitchFilterHandler('completed')}/>
        </div>
    );
};

