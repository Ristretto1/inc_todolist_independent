import React from 'react';
import {FullInput} from "./FullInput/FullInput";
import {FilterBtnBlock} from "./FilterBtnBlock/FilterBtnBlock";
import {TasksList} from "./TasksList/TasksList";
import {Button} from "./Button";
import {FilterType, TaskType} from "../App";
import {lookupService} from 'dns';

type TodolistPropsType = {
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    addTask: (title: string) => void
    changeFilter: (value: FilterType) => void
    filter: FilterType
    checkboxStatusSwitcher: (id: string, status: boolean) => void
}

export const Todolist: React.FC<TodolistPropsType> = ({tasks, removeTask, addTask, changeFilter, filter, checkboxStatusSwitcher}) => {
    return (
        <div>
            <h3>
                What to learn
                <Button name={'X'} callback={() => {
                }}/>
            </h3>
            <FullInput
                callback={addTask}
            />
            <TasksList
                tasks={tasks}
                removeTask={removeTask}
                checkboxStatusSwitcher={checkboxStatusSwitcher}
            />
            <FilterBtnBlock
                filter={filter}
                changeFilter={changeFilter}
            />
        </div>
    );
};

