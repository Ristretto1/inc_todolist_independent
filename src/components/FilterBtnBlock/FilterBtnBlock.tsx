import React from 'react';
import {Button} from '../Button';
import {FilterType} from '../../App';
import s from './FilterBtnBlock.module.css'

type FilterBtnBlockPropsType = {
    changeFilter: (value: FilterType) => void
    filter: FilterType
}

export const FilterBtnBlock: React.FC<FilterBtnBlockPropsType> = ({changeFilter, filter}) => {

    const onAllFilterHandler = () => changeFilter('all')
    const onActiveFilterHandler = () => changeFilter('active')
    const onCompletedFilterHandler = () => changeFilter('completed')

    return (
        <div>
            <Button className={filter ==='all' ? s.activeFilter : ''} name={'All'} callback={onAllFilterHandler}/>
            <Button className={filter ==='active' ? s.activeFilter : ''} name={'Active'} callback={onActiveFilterHandler}/>
            <Button className={filter ==='completed' ? s.activeFilter : ''} name={'Completed'} callback={onCompletedFilterHandler}/>
        </div>
    );
};

