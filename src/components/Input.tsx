import React, {ChangeEvent, KeyboardEvent} from 'react';

type InputPropsType = {
    title: string
    setTitle: (title: string) => void
    callback: () => void
    setError: (error: string) => void
}

export const Input: React.FC<InputPropsType> = ({title, setTitle, setError, callback}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError('')
        if (e.key === 'Enter') {
            callback()
        }
    }

    return (
        <input
            type="text"
            value={title}
            onChange={onChangeHandler}
            onKeyPress={onKeyPressHandler}
        />
    );
};

