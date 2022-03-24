import React from 'react';
import {Button} from './Button';
import {TasksList} from './TasksList';
import {FilterType, TaskType} from '../App';
import {InputBlock} from './InputBlock';
import {FilterBtnBlock} from './FilterBtnBlock';

type TodoListPropsType = {
    tasks: Array<TaskType>
    removeTask: (id: string, TLid: string) => void
    checkboxSwitch: (id: string, done: boolean, TLid:string) => void
    addTask: (title: string, id: string) => void
    changeFilter: (filter: FilterType, id: string) => void
    filter: FilterType
    title: string
    TLid: string
    removeTodolist: (TLid: string) => void
}

export const TodoList: React.FC<TodoListPropsType> = ({removeTodolist, TLid,title, filter, changeFilter, addTask, tasks, removeTask, checkboxSwitch}) => {

    const onRemoveTodolistHandler = () => {
        removeTodolist(TLid)
    }

    return (
        <div>
            <h3>{title} <button onClick={onRemoveTodolistHandler}>x</button></h3>

            <InputBlock TLid={TLid} addTask={addTask}/>

            <TasksList TLid={TLid} tasks={tasks} removeTask={removeTask} checkboxSwitch={checkboxSwitch}/>

            <FilterBtnBlock TLid={TLid} changeFilter={changeFilter} filter={filter}/>
        </div>
    );
};

