import React, {ChangeEvent, KeyboardEvent} from 'react';

type InputPropsType = {
    title: string
    setTitle: (title: string) => void
    onAddItemHandler: () => void
    setError: (error: string) => void
    className?: string
}

export const Input: React.FC<InputPropsType> = ({title, setTitle, onAddItemHandler, setError, className}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError('')
        if (e.key === 'Enter') {
            onAddItemHandler()
        }
    }

    return (
        <input
            type="text"
            value={title}
            onChange={onChangeHandler}
            onKeyPress={onKeyPressHandler}
            className={className}
        />
    );
};

