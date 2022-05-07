import React from 'react';
import {TdlTitleBlock} from './TdlTitleBlock';
import {InputBlock} from './InputBlock';
import {TasksList} from './TasksList';
import {FilterBtnBlock} from './FilterBtnBlock/FilterBtnBlock';
import {FilterType, TaskType} from '../App';

type TodolistPropsType = {
    tasks: Array<TaskType>
    filterSwitcher: (filter: FilterType) => void
    removeTask: (id: string) => void
    addTask: (title: string) => void
    checkboxStatusSwitcher: (id: string, status: boolean) => void
    filter: FilterType
}

export const Todolist: React.FC<TodolistPropsType> = ({tasks, filterSwitcher, removeTask, addTask, checkboxStatusSwitcher, filter}) => {
    return (
        <div>
            <TdlTitleBlock/>
            <InputBlock
                callback={addTask}
            />
            <TasksList
                tasks={tasks}
                removeTask={removeTask}
                checkboxStatusSwitcher={checkboxStatusSwitcher}
            />
            <FilterBtnBlock
                filterSwitcher={filterSwitcher}
                filter={filter}
            />
        </div>
    );
};

