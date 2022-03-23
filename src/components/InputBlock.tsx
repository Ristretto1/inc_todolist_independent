import React, {useState} from 'react';
import {Button} from './Button';
import {Input} from './Input';

type InputBlockPropsType = {
    addTask: (title: string) => void
}

export const InputBlock: React.FC<InputBlockPropsType> = ({addTask}) => {

    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<string>('')

    const onAddTaskHandler = () => {
        if (!title.trim()) {
            setError('Поле обязательно для ввода')
            return
        }
        addTask(title.trim())
        setTitle('')
    }

    return (
        <div>
            <Input title={title}
                   setTitle={setTitle}
                   callback={onAddTaskHandler}
                   className={error ? 'errorBorder' : ''}
                   setError={setError}
            />
            <Button name={'+'} callback={onAddTaskHandler}/>
            {error && <div className={'errorText'}>{error}</div>}
        </div>
    );
};
