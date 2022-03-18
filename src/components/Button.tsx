import React from 'react';

type ButtonPropsType = {
    name: string
    callback: () => void
    className?: string
}

export const Button: React.FC<ButtonPropsType> = (props) => {

    const onClickHandler = () => {
        props.callback()
    }

    return (
        <button className={props.className} onClick={onClickHandler}>{props.name}</button>
    );
};
