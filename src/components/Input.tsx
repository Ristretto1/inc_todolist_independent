import React, {ChangeEvent, KeyboardEvent} from 'react';

type InputPropsType = {
    title: string
    setTitle: (title: string) => void
    callback: () => void
    className?: string
    setError: (error: string) => void
}

export const Input: React.FC<InputPropsType> = ({setError,title, setTitle, callback, className}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const keyPressAction = (e: KeyboardEvent<HTMLInputElement>) => {
        setError('')
        if (e.key === 'Enter') callback()
    }

    return (
        <input
            type="text"
            value={title}
            onChange={onChangeHandler}
            onKeyPress={keyPressAction}
            className={className}
        />
    );
};

