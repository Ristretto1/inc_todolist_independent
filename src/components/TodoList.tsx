import React from 'react';
import InputBlock from './InputBlock';
import {TasksList} from './TasksList';
import {Button} from './Button';
import {FilterType, TaskType} from '../App';
import {FilterButtonBlock} from './FilterButtonBlock';

type TodoListPropsType = {
    title: string
    setTitle: (title: string) => void
    addTask: (title: string) => void
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    setFilter: (filter: FilterType) => void
    CheckBoxSwitcher: (id: string, isDone: boolean) => void
    filter: FilterType
}

export const TodoList: React.FC<TodoListPropsType> = ({title, setTitle, addTask, tasks, removeTask, setFilter, CheckBoxSwitcher, filter}) => {
    return (
        <div>
            <h3>What to learn</h3>

            <InputBlock title={title} setTitle={setTitle} addTask={addTask}/>
            <TasksList tasks={tasks} removeTask={removeTask} CheckBoxSwitcher={CheckBoxSwitcher}/>
            <FilterButtonBlock setFilter={setFilter} filter={filter}/>
        </div>
    );
};

