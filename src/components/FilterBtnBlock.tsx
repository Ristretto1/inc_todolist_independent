import React from 'react';
import {Button} from './Button';

type FilterBtnBlockPropsType = {

}

export const FilterBtnBlock: React.FC<FilterBtnBlockPropsType> = ({}) => {
    return (
        <div>
            <Button name={'All'} callback={() => {
            }}/>
            <Button name={'Active'} callback={() => {
            }}/>
            <Button name={'Completed'} callback={() => {
            }}/>
        </div>
    );
};

