import React, {useState} from 'react';
import {Button} from '../Button';
import {Input} from '../Input';
import s from './InputBlock.module.css'

type InputBlockPropsType = {
    callback: (title: string) => void
}

export const InputBlock: React.FC<InputBlockPropsType> = ({callback}) => {

    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<string>('')

    const addItemHandler = () => {
        if (title.trim() === '') {
            setError('Заполните поле')
        } else {
            callback(title.trim())
            setTitle('')
        }
    }

    return (
        <div>
            <Input
                className={error ? s.errorBorder : ''}
                title={title}
                setTitle={setTitle}
                callback={addItemHandler}
                setError={setError}
            />
            <Button name={'+'} callback={addItemHandler}/>
            {error && <div className={s.errorText}>{error}</div>}
        </div>
    );
};

