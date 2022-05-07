import React from 'react';
import {TdlTitleBlock} from './TdlTitleBlock';
import {InputBlock} from './InputBlock';
import {TasksList} from './TasksList';
import {FilterBtnBlock} from './FilterBtnBlock';
import {FilterType, TaskType} from '../App';

type TodolistPropsType ={
    tasks: Array<TaskType>
    filterSwitcher: (filter: FilterType) => void
}

export const Todolist: React.FC<TodolistPropsType> = ({tasks, filterSwitcher}) => {
    return (
        <div>
            <TdlTitleBlock/>
            <InputBlock/>
            <TasksList
                tasks={tasks}
            />
            <FilterBtnBlock
                filterSwitcher={filterSwitcher}
            />
        </div>
    );
};

