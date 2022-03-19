import React, {useState} from 'react';
import {Input} from './Input';
import {Button} from './Button';

type InputBlockPropsType ={
    title: string
    setTitle: (title: string) => void
    addTask: (title: string) => void
}

const InputBlock: React.FC<InputBlockPropsType> = ({title, setTitle, addTask}) => {
    const [error, setError] = useState<string>('')
    const onAddTaskHandler = () => {
        if (title.trim() === '') {
            setError('Поле ввода обязательно')
            return
        }
        addTask(title.trim())
        setTitle('')
    }

    return (
        <div>
            <Input
                title={title}
                setTitle={setTitle}
                callback={onAddTaskHandler}
                setError={setError}
                className = {error ? 'errorBorder': ''}
            />
            <Button name={'+'} callback={onAddTaskHandler}/>
            <div className={'errorText'}>{error}</div>
        </div>
    );
};

export default InputBlock;