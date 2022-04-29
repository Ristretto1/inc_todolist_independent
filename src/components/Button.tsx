import React from 'react';

type ButtonPropsType = {
    name: string,
    callback: ()=>void,
    className?: string
}

export const Button: React.FC<ButtonPropsType> = ({name, callback, className}) => {

    const onButtonHandler = () => {
        callback()
    }

    return (
        <button onClick={onButtonHandler} className={className}>{name}</button>
    );
};

