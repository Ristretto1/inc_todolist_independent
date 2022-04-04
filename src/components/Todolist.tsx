import React from 'react';
import {Button} from './Button';
import {InputBlock} from './InputBlock';
import {TasksList} from './TasksList';
import {FilterType, TaskType} from '../App';
import {FilterBtnBlock} from './FilterBtnBlock';

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
    setFilter: (todolistId: string, filter: FilterType) => void
    filter: FilterType
    removeTask: (todolistId: string, taskId: string) => void
    switchCheckboxStatus: (todolistId: string, status: boolean, taskId: string) => void
    addTask: (todolistId: string, title: string) => void
    todolistId: string
    removeTdl: (todolistId: string) => void
}

export const Todolist: React.FC<TodolistPropsType> = ({removeTdl, todolistId, addTask, switchCheckboxStatus, removeTask, filter, setFilter, tasks, title,}) => {

    const onRemoveTdlHandler = () => removeTdl(todolistId)

    return (
        <div>
            <h3>
                {title}
                <Button name={'X'} callback={onRemoveTdlHandler}/>
            </h3>
            <InputBlock
                addTask={addTask}
                todolistId={todolistId}
            />
            <TasksList
                tasks={tasks}
                removeTask={removeTask}
                switchCheckboxStatus={switchCheckboxStatus}
                todolistId={todolistId}
            />
            <FilterBtnBlock
                setFilter={setFilter}
                filter={filter}
                todolistId={todolistId}
            />
        </div>
    );
};

