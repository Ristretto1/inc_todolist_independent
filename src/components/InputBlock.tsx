import React, {useState} from 'react';
import {Input} from './Input';
import {Button} from './Button';

type InputBlockPropsType ={
    addTask: (title: string) => void
}

export const InputBlock: React.FC<InputBlockPropsType> = ({addTask}) => {

    const [title, setTitle] = useState<string>('')

    const addTaskHandler = () => {
        if(title.trim() === '') return
        addTask(title.trim())
        setTitle('')
    }

    return (
        <div>
            <Input title={title} setTitle={setTitle} keyPressCallback={addTaskHandler}/>
            <Button name={'+'} callback={addTaskHandler}/>
        </div>
    );
};

