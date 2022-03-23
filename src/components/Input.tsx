import React, {ChangeEvent, KeyboardEvent} from 'react';

type InputPropsType = {
    title: string
    setTitle: (title: string) => void
    callback: () => void
}

export const Input: React.FC<InputPropsType> = ({title, setTitle, callback}) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressAddTaskHandler =(e:KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') callback()
    }

    return (
        <input
            value={title}
            onChange={onChangeInputHandler}
            onKeyPress={onKeyPressAddTaskHandler}
        />
    );
};

