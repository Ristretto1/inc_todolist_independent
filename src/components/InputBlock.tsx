import React, {useState} from 'react';
import {Button} from './Button';
import {Input} from './Input';

type InputBlockPropsType = {
    addTask: (title: string) => void
}

export const InputBlock: React.FC<InputBlockPropsType> = ({addTask}) => {
    const [error, setError] =useState<string>('')
    const [title, setTitle] = useState<string>('')
    const addTaskHandler = () => {
        if(!title.trim()) {
            setError('Поле обязательно')
            return
        }
        addTask(title.trim())
        setTitle('')
    }

    return (
        <div>
            <Input
                title={title}
                setTitle={setTitle}
                callback={addTaskHandler}
                className={error ? 'errorBorder' : ''}
                setError={setError}
            />
            <Button name={'+'} callback={addTaskHandler}/>
            {error && <div className={'errorText'}>{error}</div>}
        </div>
    );
};

