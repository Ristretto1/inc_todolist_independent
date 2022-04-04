import React from 'react';

type ButtonPropsType = {
    name: string
    callback: () => void
    className?: string
}

export const Button: React.FC<ButtonPropsType> = ({name, callback, className}) => {

    const onClickHandler = () => callback()

    return (
        <button className={className} onClick={onClickHandler}>{name}</button>
    );
};

