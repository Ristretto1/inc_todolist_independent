import React from 'react';

type ButtonPropsType = {
    name: string
    callback: () => void
    className?: string
}

export const Button:React.FC<ButtonPropsType> = ({name, callback, className}) => {

    const onClickBtnHandler =()=> callback()

    return (
        <button onClick={onClickBtnHandler} className={className}>{name}</button>
    );
};

