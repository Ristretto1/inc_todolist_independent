import React from 'react';
import {Button} from './Button';
import {TasksList} from './TasksList';
import {FilterType, TaskType} from '../App';
import {InputBlock} from './InputBlock';
import {FilterBtnBlock} from './FilterBtnBlock';

type TodoListPropsType = {
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    checkboxSwitch: (id: string, done: boolean) => void
    addTask: (title: string) => void
    setFilter: (filter: FilterType) => void
}

export const TodoList: React.FC<TodoListPropsType> = ({setFilter, addTask, tasks, removeTask, checkboxSwitch}) => {
    return (
        <div>
            <h3>What to learn</h3>

            <InputBlock addTask={addTask}/>

            <TasksList tasks={tasks} removeTask={removeTask} checkboxSwitch={checkboxSwitch}/>

            <FilterBtnBlock setFilter={setFilter}/>
        </div>
    );
};

