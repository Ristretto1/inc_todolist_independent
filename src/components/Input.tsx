import React, {ChangeEvent} from 'react';

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

    return (
        <input
            type="text"
            value={title}
            onChange={onChangeHandler}
            className={className}
        />
    );
};

