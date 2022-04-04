import React from 'react';
import {Button} from './Button';
import {InputBlock} from './InputBlock';
import {TasksList} from './TasksList';
import {FilterBtnBlock} from './FilterBtnBlock';
import {FilterType, TaskType} from '../App';

type TodolistPropsType = {
    addTask: (title: string) => void
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    setFilter: (filter: FilterType) => void
    filter: FilterType
}

export const Todolist: React.FC<TodolistPropsType> = ({addTask, tasks, removeTask, setFilter, filter}) => {
    return (
        <div>
            <h3>
                What to learn
                <Button name={'X'} callback={() => {
                }}/>
            </h3>

            <InputBlock
                addTask={addTask}
            />

            <TasksList
                tasks={tasks}
                removeTask={removeTask}
            />

            <FilterBtnBlock
                setFilter={setFilter}
                filter={filter}
            />
        </div>
    );
};

