import React, {ChangeEvent} from 'react';

type InputPropsType = {
    title: string
    setTitle: (title: string) => void
}

export const Input: React.FC<InputPropsType> = ({title, setTitle}) => {

    const onChangeHandler =(e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

    return (
        <input
            value={title}
            onChange={onChangeHandler}
        />
    );
};

