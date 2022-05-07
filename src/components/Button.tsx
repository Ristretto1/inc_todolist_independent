import React from 'react';

type ButtonPropsType = {
    name: string,
    callback: ()=>void,
    className?: string
    disabled?: boolean
}

export const Button: React.FC<ButtonPropsType> = ({name, callback, className, disabled}) => {

    const onButtonHandler = () => {
        callback()
    }

    return (
        <button disabled={disabled} onClick={onButtonHandler} className={className}>{name}</button>
    );
};

