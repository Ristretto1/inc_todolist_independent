import React, {useState} from 'react';
import {Input} from './Input';
import {Button} from './Button';

type InputBlockPropsType ={
    addTask: (todolistId: string, title: string) => void
    todolistId: string
}

export const InputBlock: React.FC<InputBlockPropsType> = ({todolistId, addTask}) => {

    const [title, setTitle] = useState<string>('')

    const addTaskHandler = () => {
        if(title.trim() === '') return
        addTask(todolistId, title.trim())
        setTitle('')
    }

    return (
        <div>
            <Input title={title} setTitle={setTitle} keyPressCallback={addTaskHandler}/>
            <Button name={'+'} callback={addTaskHandler}/>
        </div>
    );
};

