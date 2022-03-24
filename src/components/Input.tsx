import React, {ChangeEvent, KeyboardEvent} from 'react';

type InputPropsType = {
    title: string
    setTitle: (title: string) => void
    callback: () => void
    setError: (title: string) => void
    className: string
}

export const Input: React.FC<InputPropsType> = ({className, setError, callback, title, setTitle}) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError('')
        if (e.key === 'Enter') callback()
    }

    return (
        <input type="text"
               value={title}
               onChange={onChangeInputHandler}
               onKeyPress={onKeyPressHandler}
               className={className}
        />
    );
};

