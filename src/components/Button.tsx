import React from 'react';

type ButtonPropsType = {
    name: string
    callback: () => void
    className?: string
}

export const Button: React.FC<ButtonPropsType> = ({callback, className, name}) => {

    const onClickHandler = () => callback()

    return (
        <button onClick={onClickHandler} className={className}>{name}</button>
    );
};

