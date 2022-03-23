import React, {useState} from 'react';
import {Button} from './Button';
import {Input} from './Input';

type InputBlockPropsType = {
    addTask: (title:string) => void
}

export const InputBlock: React.FC<InputBlockPropsType> = ({addTask}) => {

    const [title, setTitle] = useState('')

    const onAddTaskHandler = () => {
        addTask(title)
    }

    return (
        <div>
            <Input title={title} setTitle={setTitle} callback={onAddTaskHandler}/>
            <Button name={'+'} callback={onAddTaskHandler}/>
        </div>
    );
};
