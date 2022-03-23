import React, {ChangeEvent, KeyboardEvent} from 'react';

type InputPropsType = {
    title: string
    setTitle: (title: string) => void
    callback: () => void
    className: string
    setError: (error: string) => void
}

export const Input: React.FC<InputPropsType> = ({title,setError, setTitle, callback,className}) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressAddTaskHandler =(e:KeyboardEvent<HTMLInputElement>) => {
        setError('')
        if(e.key === 'Enter') callback()
    }

    return (
        <input
            value={title}
            onChange={onChangeInputHandler}
            onKeyPress={onKeyPressAddTaskHandler}
            className={className}
        />
    );
};

