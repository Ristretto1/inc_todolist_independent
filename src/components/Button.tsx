import React from 'react';

type ButtonPropsType = {
    name: string
    callback: () => void
    className?: string
    disabled?: boolean
}

export const Button: React.FC<ButtonPropsType> = ({name, callback, className, disabled}) => {

    const onClickHandler = () => callback()

    return (
        <button
            disabled={disabled}
            className={className}
            onClick={onClickHandler}
        >{name}</button>
    );
};

