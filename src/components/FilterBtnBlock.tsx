import React from 'react';
import {Button} from './Button';
import {FilterType} from '../App';

type FilterBtnBlockPropsType = {
    filterSwitcher: (filter: FilterType) => void
}

export const FilterBtnBlock: React.FC<FilterBtnBlockPropsType> = ({filterSwitcher}) => {

    const onFilterBtnHandler = (filter: FilterType) => filterSwitcher(filter)

    return (
        <div>
            <Button name={'All'} callback={() => onFilterBtnHandler('all')}/>
            <Button name={'Active'} callback={() => onFilterBtnHandler('active')}/>
            <Button name={'Completed'} callback={() => onFilterBtnHandler('completed')}/>
        </div>
    );
};

