import React from 'react';

type ButtonPropsType = {
    name: string
    callback: () => void
    className?: string
}

export const Button: React.FC<ButtonPropsType> = ({name,className, callback}) => {

    const onClickButtonHandler = () => callback()

    return (
        <button onClick={onClickButtonHandler} className={className}>{name}</button>
    );
};

