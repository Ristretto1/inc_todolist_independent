import React, {useState} from 'react';
import {Button} from './Button';
import {Input} from './Input';

type InputBlockPropsType = {
    addTask: (title: string, id:string) => void
    TLid: string
}

export const InputBlock: React.FC<InputBlockPropsType> = ({TLid,addTask}) => {
    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<string>('')

    const onAddTaskHandler = () => {
        if (!title.trim()) {
            setError('Поле обязательно для заполнения')
            return
        }
        addTask(title.trim(), TLid)
        setTitle('')
    }

    return (
        <div>
            <Input className={error ? 'errorBorder' : ''} title={title} setTitle={setTitle} callback={onAddTaskHandler} setError={setError}/>

            <Button name={'+'} callback={onAddTaskHandler}/>

            {error && <div className={'errorText'}>{error}</div>}
        </div>
    );
};

