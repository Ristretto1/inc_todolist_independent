import React, {ChangeEvent, KeyboardEvent} from 'react';

type InputPropsType = {
    title: string
    setTitle: (title: string) => void
    keyPressCallback: () => void
    setError: (error: string) => void
    className: string
}

export const Input: React.FC<InputPropsType> = ({className, setError, keyPressCallback, title, setTitle}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError('')
        if (e.key === 'Enter') keyPressCallback()
    }

    return (
        <input
            className={className}
            type={'text'}
            value={title}
            onChange={onChangeHandler}
            onKeyPress={onKeyPressHandler}
        />
    );
};

