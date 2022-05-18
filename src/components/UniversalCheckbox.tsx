import React, {ChangeEvent, FC} from 'react';

type UniversalCheckboxPropsType = {
    callback: (checkValue: boolean) => void
    checked: boolean
}

export const UniversalCheckbox:FC<UniversalCheckboxPropsType> = ({callback, checked}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => callback(e.currentTarget.checked)

    return (
        <input type="checkbox" onChange={onChangeHandler} checked={checked}/>
    );
};

