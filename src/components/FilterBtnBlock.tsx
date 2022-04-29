import React from 'react';
import {Button} from "./Button";

export const FilterBtnBlock = () => {
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

