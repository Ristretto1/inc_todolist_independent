import React, {useState} from 'react';
import {Button} from './Button';
import {Input} from './Input';
import s from './FullInput.module.css'

type FullInputPropsType = {
    addItem: (title: string) => void
}

export const FullInput: React.FC<FullInputPropsType> = ({addItem}) => {

    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<string>('')

    const onAddItemHandler = () => {
        if(title.trim()) {
            addItem(title.trim())
            setTitle('')
            setError('')
        } else {
            setError('Введите данные')
        }
    }

    return (
        <div>
            <Input
                title={title}
                setTitle={setTitle}
                callback={onAddItemHandler}
                setError={setError}
            />
            <Button name={'+'} callback={onAddItemHandler}/>
            {error && <div className={s.errorText}>{error}</div>}
        </div>
    );
};
