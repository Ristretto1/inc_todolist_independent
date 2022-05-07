import React, {ChangeEvent, useState} from 'react';
import {Button} from './Button';
import {Input} from './Input';

type InputBlockPropsType = {}

export const InputBlock: React.FC<InputBlockPropsType> = ({}) => {

    const [title, setTitle] = useState<string>('')


    return (
        <div>
            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} callback={() => {
            }}/>
        </div>
    );
};

