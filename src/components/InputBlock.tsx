import React, {useState} from 'react';
import {Button} from './Button';
import {Input} from './Input';

type InputBlockPropsType = {
    addTask: (title: string) => void
    title: string
    setTitle: (title: string) => void
}

const InputBlock: React.FC<InputBlockPropsType> = ({addTask, title, setTitle}) => {
    const [error, setError] = useState<string>('')

    const onAddTaskHandler = () => {
        if (!title) {
            setError('Поле обязательно для ввода')
            return
        }
        addTask(title.trim())
        setTitle('')
    }

    return (
        <div>
            <Input
                className={error && 'errorBorder'}
                title={title} setTitle={setTitle}
                callback={onAddTaskHandler}
                setError={setError}
            />
            <Button name={'+'} callback={onAddTaskHandler}/>
            <div className={'errorText'}>{error}</div>
        </div>
    );
};

export default InputBlock;