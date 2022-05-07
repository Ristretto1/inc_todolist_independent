import React from 'react';
import {Button} from '../Button';
import {FilterType} from '../../App';
import s from './FilterBtnBlock.module.css'

type FilterBtnBlockPropsType = {
    filterSwitcher: (filter: FilterType) => void
    filter: FilterType
}

export const FilterBtnBlock: React.FC<FilterBtnBlockPropsType> = ({filterSwitcher, filter}) => {

    const onFilterBtnHandler = (filter: FilterType) => filterSwitcher(filter)

    return (
        <div>
            <Button className={filter=== 'all' ? s.activeFilter : ''} name={'All'} callback={() => onFilterBtnHandler('all')}/>
            <Button className={filter=== 'active' ? s.activeFilter : ''} name={'Active'} callback={() => onFilterBtnHandler('active')}/>
            <Button className={filter=== 'completed' ? s.activeFilter : ''} name={'Completed'} callback={() => onFilterBtnHandler('completed')}/>
        </div>
    );
};

