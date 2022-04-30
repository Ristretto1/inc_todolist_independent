import React, {useState} from 'react';
import {Button} from "./Button";
import {Input} from "./Input";

type FullInputPropsType = {
    callback: (title: string) => void
}

export const FullInput: React.FC<FullInputPropsType> = ({callback}) => {
    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<string>('')

    const onAddItemHandler = () => {
        if (title.trim()) {
            callback(title.trim())
            setTitle('')
        } else {
            setError('Заполните поле')
        }
    }

    return (
        <div>
            <Input
                title={title}
                setTitle={setTitle}
                onAddItemHandler={onAddItemHandler}
                setError={setError}
            />
            <Button name={'+'} callback={onAddItemHandler}/>
            {error && <div>{error}</div>}
        </div>
    );
};

