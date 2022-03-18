import React, {ChangeEvent, useState, KeyboardEvent} from 'react';

type InputPropsType = {
    title: string
    setTitle: (title: string) => void
    callback: () => void
    setError?: (error: string) => void
    className?: string
}

export const Input:React.FC<InputPropsType> = (props) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(props.setError) props.setError('')
        if (e.key === 'Enter') props.callback()
    }

    return (
        <input
            value={props.title}
            onChange={onChangeInputHandler}
            onKeyPress={onKeyPressHandler}
            className={props.className}
        />
    );
};

