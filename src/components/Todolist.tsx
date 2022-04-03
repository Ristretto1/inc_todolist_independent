import React from 'react';
import {Button} from './Button';
import {InputBlock} from './InputBlock';
import {TasksList} from './TasksList';
import {FilterBtnBlock} from './FilterBtnBlock';
import {FilterType, TaskType} from '../App';

type TodolistPropsType = {
    removeTask: (taskId: string) => void
    addTask: (title: string) => void
    checkboxSwitcher: (id: string, checkboxStatus: boolean) => void
    tasks: Array<TaskType>
    setFilter: (filter: FilterType) => void
    title: string
}

export const Todolist: React.FC<TodolistPropsType> = ({title, removeTask, tasks, setFilter, addTask, checkboxSwitcher}) => {
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
            />

            <FilterBtnBlock setFilter={setFilter}/>
        </div>
    );
};

