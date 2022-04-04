import React, {useState} from 'react';
import {Input} from './Input';
import {Button} from './Button';

type InputBlockPropsType ={
    addTask: (title: string)=> void
}

export const InputBlock: React.FC<InputBlockPropsType> = ({addTask}) => {

    const [title, setTitle] = useState<string>('')
    const onAddTaskHandler = () => {
        if (!title.trim()) return
        addTask(title.trim())
        setTitle('')
    }

    return (
        <div>
            <Input
                setTitle={setTitle}
                title={title}
                callback={onAddTaskHandler}
                className={''}
            />
            <Button name={'+'} callback={onAddTaskHandler}/>
        </div>
    );
};

