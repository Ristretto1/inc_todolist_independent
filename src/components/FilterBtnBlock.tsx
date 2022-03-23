import React from 'react';
import {Button} from './Button';
import {FilterType} from '../App';

type FilterBtnBlockPropsType = {
    setFilter: (filter: FilterType) => void
}

export const FilterBtnBlock: React.FC<FilterBtnBlockPropsType> = ({setFilter}) => {

    const onSwitchFilterBtnHandler = (filter: FilterType) => {
        setFilter(filter)
    }

    return (
        <div>
            <Button name={'All'} callback={() => onSwitchFilterBtnHandler('all')}/>
            <Button name={'Active'} callback={() => onSwitchFilterBtnHandler('active')}/>
            <Button name={'Completed'} callback={() => onSwitchFilterBtnHandler('completed')}/>
        </div>
    );
};

