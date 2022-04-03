import React from 'react';
import {Button} from './Button';
import {InputBlock} from './InputBlock';
import {TasksList} from './TasksList';
import {FilterBtnBlock} from './FilterBtnBlock';
import {FilterType, TaskType} from '../App';

type TodolistPropsType = {
    removeTask: (todolistId: string, taskId: string) => void
    addTask: (todolistId: string, title: string) => void
    checkboxSwitcher: (todolistId: string, id: string, checkboxStatus: boolean) => void
    tasks: Array<TaskType>
    setFilter: (todolistId: string, filter: FilterType) => void
    title: string
    todolistId: string
    removeTDL: (todolistId: string) => void
}

export const Todolist: React.FC<TodolistPropsType> = ({removeTDL, todolistId, title, removeTask, tasks, setFilter, addTask, checkboxSwitcher}) => {

    const removeTDLHandler = () => removeTDL(todolistId)


    return (
        <div>

            <h3>
                {title}
                <Button name={'X'} callback={removeTDLHandler}/>
            </h3>

            <InputBlock
                addTask={addTask}
                todolistId={todolistId}
            />

            <TasksList
                tasks={tasks}
                removeTask={removeTask}
                checkboxSwitcher={checkboxSwitcher}
                todolistId={todolistId}
            />

            <FilterBtnBlock
                setFilter={setFilter}
                todolistId={todolistId}
            />
        </div>
    );
};

