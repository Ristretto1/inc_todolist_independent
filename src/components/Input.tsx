import React, {ChangeEvent,KeyboardEvent} from 'react';

type InputPropsType ={
    title: string
    setTitle: (title: string) => void
    callback: () => void
    className?: string
}

export const Input: React.FC<InputPropsType> = ({className, title, setTitle, callback}) => {

    const onChangeHandler =(e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler =(e:KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') callback()
    }
    

    return (
        <input
            type="text"
            value={title}
            onChange={onChangeHandler}
            className={className}
            onKeyPress={onKeyPressHandler}
        />
    );
};

