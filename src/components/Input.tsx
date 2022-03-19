import React, {ChangeEvent, KeyboardEvent} from 'react';

type InputPropsType = {
    title: string
    setTitle: (title: string) => void
    callback: () => void
    className?: string
    setError?: (error: string) => void
}

export const Input: React.FC<InputPropsType> = ({title, setTitle, callback, setError, className}) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (setError) {
            setError('')
        }
        if (e.key === 'Enter') {
            callback()
        }
    }

    return (
        <input
            type="text"
            value={title}
            onChange={onChangeInputHandler}
            onKeyPress={onKeyPressHandler}
            className={className}
        />
    );
};

