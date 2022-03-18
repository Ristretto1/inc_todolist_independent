import React, {ChangeEvent, useState} from 'react';
import {Button} from './Button';
import {FilterType, TaskType} from '../App';
import {Input} from './Input';

type TodoListPropsType = {
    tasks: Array<TaskType>
    filterSwitcher: (filter: FilterType) => void
    removeTask: (id: string) => void
    addTask: (title: string) => void
    checkboxStatusSwitcher: (id: string, isDone: boolean) => void
    filter: FilterType
}

const TodoList: React.FC<TodoListPropsType> = (props) => {

    const onClickFilterSwitcher = (filter: FilterType) => {
        props.filterSwitcher(filter)
    }
    const onClickRemoveHandler = (id: string) => {
        props.removeTask(id)
    }

    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<string>('')
    const addTaskHandler = () => {
        if (title.trim() === '') {
            setError('Введите имя')
            return
        }
        props.addTask(title.trim())
        setTitle('')
    }

    const onChangeCheckboxHandler = (id: string, e: ChangeEvent<HTMLInputElement>) => {
        props.checkboxStatusSwitcher(id, e.currentTarget.checked)
    }


    return (
        <div>
            <h3>What to learn</h3>
            <div>
                <Input
                    title={title}
                    setTitle={setTitle}
                    callback={addTaskHandler}
                    setError={setError}
                    className={error ? 'errorInput' : ''}
                />
                <Button name={'+'} callback={addTaskHandler}/>
                {error && <div className={'errorText'}>{error}</div>}
            </div>

            <ul>
                {props.tasks.map(t => {
                    return (
                        <li key={t.id} className={t.isDone ? 'isDoneTask' : ''}>
                            <input type="checkbox"
                                   checked={t.isDone}
                                   onChange={(e) => onChangeCheckboxHandler(t.id, e)}
                            />
                            <span>{t.task}</span>
                            <Button name={'x'} callback={() => onClickRemoveHandler(t.id)}/>
                        </li>
                    )
                })}
            </ul>

            <div>
                <Button className={props.filter === 'all' ? 'filterBtnActive' : ''} name={'All'}
                        callback={() => onClickFilterSwitcher('all')}/>
                <Button className={props.filter === 'active' ? 'filterBtnActive' : ''} name={'Active'}
                        callback={() => onClickFilterSwitcher('active')}/>
                <Button className={props.filter === 'completed' ? 'filterBtnActive' : ''} name={'Completed'}
                        callback={() => onClickFilterSwitcher('completed')}/>
            </div>
        </div>
    );
};

export default TodoList;