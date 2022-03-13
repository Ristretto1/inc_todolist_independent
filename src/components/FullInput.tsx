import React, {ChangeEvent, useState} from 'react';
import Button from './Button';

type FullInputPropsType = {
    addTask: (title: string) => void
}

const FullInput = (props: FullInputPropsType) => {

    const [title, setTitle] = useState('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onClickAddTaskHandler = () => {
        props.addTask(title)
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <Button name={'+'} callback={onClickAddTaskHandler}/>
        </div>
    );
};

export default FullInput;