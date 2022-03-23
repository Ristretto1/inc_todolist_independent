import React from 'react';

type ButtonPropsType = {
    name: string
    callback: () => void
}

export const Button: React.FC<ButtonPropsType> = ({name, callback}) => {

    const onClickButtonHandler = () => callback()

    return (
        <button onClick={onClickButtonHandler}>{name}</button>
    );
};

