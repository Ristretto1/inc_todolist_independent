import React from 'react';
import {Button} from "./Button";
import {FilterType} from "../App";

type FilterBtnBlockPropsType = {
    changeFilter: (value: FilterType) => void
}

export const FilterBtnBlock: React.FC<FilterBtnBlockPropsType> = ({changeFilter}) => {

    return (
        <div>
            <Button name={'All'} callback={() => changeFilter('all')}/>
            <Button name={'Active'} callback={() => changeFilter('active')}/>
            <Button name={'Completed'} callback={() => changeFilter('completed')}/>
        </div>
    );
};

