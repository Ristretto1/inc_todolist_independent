import React, {useState} from 'react';
import {Button} from './Button';
import {Input} from './Input';

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
            <Input title={title} setTitle={setTitle} callback={addItemHandler} setError={setError}/>
            <Button name={'+'} callback={addItemHandler}/>
            {error && <div>{error}</div>}
        </div>
    );
};

