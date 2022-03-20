import React from 'react';

type ButtonPropsType = {
    name: string
    callback: () => void
    className?: string
}

export const Button: React.FC<ButtonPropsType> = ({name, callback, className}) => {

    const onClickButtonHandler = () => {
        callback()
    }

    return (
        <button className={className} onClick={onClickButtonHandler}>{name}</button>
    );
};

