import React from 'react';
import {Button} from './Button';
import {InputBlock} from './InputBlock';
import {TasksList} from './TasksList';
import {FilterBtnBlock} from './FilterBtnBlock';
import {FilterType, TaskType} from '../App';

type TodolistPropsType = {
    removeTask: (todolistId: string, taskId: string) => void
    addTask: (title: string) => void
    checkboxSwitcher: (id: string, checkboxStatus: boolean) => void
    tasks: Array<TaskType>
    setFilter: (todolistId: string, filter: FilterType) => void
    title: string
    todolistId: string
}

export const Todolist: React.FC<TodolistPropsType> = ({todolistId,title, removeTask, tasks, setFilter, addTask, checkboxSwitcher}) => {
    return (
        <div>

            <h3>
                {title}
                <Button name={'X'} callback={() => {
                }}/>
            </h3>

            <InputBlock
                addTask={addTask}
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

