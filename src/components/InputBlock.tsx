import React from 'react';
import {Button} from './Button';

type InputBlockPropsType = {

}

export const InputBlock:React.FC<InputBlockPropsType> = () => {
    return (
        <div>
            <input/>
            <Button name={'+'} callback={() => {
            }}/>
        </div>
    );
};
