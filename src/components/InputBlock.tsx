import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import Button from './Button';


type FullInputPropsType = {
    addTask: (id: string) => void
}

const InputBlock: React.FC<FullInputPropsType> = (props) => {

    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<string>('')

    const onAddTaskHandler = () => {
        if (title.trim() === '') {
            setError('Поле обязательно')
            return
        }
        props.addTask(title.trim())
        setTitle('')
    }

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError('')
        if (e.key === 'Enter') onAddTaskHandler()
    }

    return (
        <div>
            <input value={title}
                   onChange={onChangeInputHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? 'error' : ''}
            />

            <Button name={'+'} callBack={onAddTaskHandler}/>

            {error && <div className={'errorMessage'}>{error}</div>}
        </div>
    );
};

export default InputBlock;