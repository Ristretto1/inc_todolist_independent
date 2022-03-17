import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from './components/Button';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    filter: FilterValuesType
    changeStatus: (taskId: string, isDone: boolean) => void

}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState<string>('') // title - значение input.value
    const [error, setError] = useState<string>('')

    // Ослеживаем изменения внутри инпута
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    // Добавление таски __callback
    const addTask = () => {
        if (title.trim() === '') { // бреем пробелы
            setError('Поле обязательно') // меняем текст ошибки
            return // обрываем функцию
        }
        props.addTask(title.trim()); // бреем пробелы
        setTitle('');
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError('') // обнуляем текст ошибки при любом нажатии
        if (e.key === 'Enter') { // вызываем добавление таски при нажатии на Enter
            addTask();
        }
    }

    // Удаление таски __callback
    const onClickHandler = (tID: string) => {
        props.removeTask(tID)
    }

    // Смена статуса чекбокса __callback
    const onChangeCheckboxHandler = (tID: string, e: ChangeEvent<HTMLInputElement>) => {
        props.changeStatus(tID, e.currentTarget.checked)
    }

    // Смена фильтра __callback
    const changeFilterHandler = (FilterValues: FilterValuesType) => {
        props.changeFilter(FilterValues)
    }


//------------------------------------------------------------------//


    return <div>
        <h3>{props.title}</h3>

        {/* Блок с инпутом */}
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? 'error' : ''} // делаем красным при ошибке
            />
            <Button name={'+'} callback={addTask}/>
            {error && <div className={'errorMessage'}>{error}</div>} {/* добавляем при ошибке */}
        </div>


        {/* Блок с тасками */}
        <ul>
            {
                props.tasks.map(t => {
                    return <li key={t.id} className={t.isDone ? 'isDone' : ''}>
                        <input type="checkbox"
                               checked={t.isDone}
                               onChange={(e) => onChangeCheckboxHandler(t.id, e)}
                        />
                        <span>{t.title}</span>
                        <Button name={'x'} callback={() => onClickHandler(t.id)}/>
                    </li>
                })
            }
        </ul>


        {/* Блок с кнопками фильтрации */}
        <div>
            <Button name={'All'} callback={() => changeFilterHandler('all')}/>
            <Button name={'Active'} callback={() => changeFilterHandler('active')}/>
            <Button name={'Completed'} callback={() => changeFilterHandler('completed')}/>

            <hr/>

            <button className={props.filter === 'all' ? 'activeFilter' : ''}
                    onClick={() => changeFilterHandler('all')}>All
            </button>
            <button className={props.filter === 'active' ? 'activeFilter' : ''}
                    onClick={() => changeFilterHandler('active')}>Active
            </button>
            <button className={props.filter === 'completed' ? 'activeFilter' : ''}
                    onClick={() => changeFilterHandler('completed')}>Completed
            </button>
        </div>
    </div>
}
