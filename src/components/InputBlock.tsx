import React, {useState} from 'react';
import {Input} from './Input';
import {Button} from './Button';



export const InputBlock = () => {

    const [title, setTitle] = useState<string>('')

    return (
        <div>
            <Input
                setTitle={setTitle}
                title={title}
                callback={()=>{}}
                className={''}
            />
            <Button name={'+'} callback={()=>{}}/>
        </div>
    );
};

