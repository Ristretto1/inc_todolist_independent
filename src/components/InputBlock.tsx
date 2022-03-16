import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import Button from './Button';
import Input from './Input';

type FullInputPropsType = {
    addTask: (id: string) => void
}

const InputBlock: React.FC<FullInputPropsType> = (props) => {

    const [title, setTitle] = useState('')

    const onAddTaskHandler = () => {
        if (title.trim() === '') {
            return
        }
        props.addTask(title.trim())
        setTitle('')
    }

    return (
        <div>
            <Input title={title} setTitle={setTitle} callback={onAddTaskHandler}/>
            <Button name={'+'} callBack={onAddTaskHandler}/>
        </div>
    );
};

export default InputBlock;