import React, {useState} from 'react';
import {Input} from './Input';
import {Button} from './Button';

type InputBlockPropsType = {
    addTask: (todolistId: string, title: string) => void
    todolistId: string
}

export const InputBlock: React.FC<InputBlockPropsType> = ({todolistId, addTask}) => {
    const [error, setError] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const onAddTaskHandler = () => {
        if (!title.trim()) {
            setError('Поле обязательно')
            return
        }
        addTask(todolistId, title.trim())
        setTitle('')
    }

    return (
        <div>
            <Input
                setTitle={setTitle}
                title={title}
                callback={onAddTaskHandler}
                className={error ? 'errorBorder' : ''}
                setError={setError}
            />
            <Button name={'+'} callback={onAddTaskHandler}/>
            {error && <div className={'errorText'}>{error}</div>}
        </div>
    );
};

