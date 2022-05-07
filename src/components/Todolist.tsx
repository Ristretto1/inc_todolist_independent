import React from 'react';
import {TdlTitleBlock} from './TdlTitleBlock';
import {InputBlock} from './InputBlock';
import {TasksList} from './TasksList';
import {FilterBtnBlock} from './FilterBtnBlock';
import {TaskType} from '../App';

type TodolistPropsType ={
    tasks: Array<TaskType>
}

export const Todolist: React.FC<TodolistPropsType> = ({tasks}) => {
    return (
        <div>
            <TdlTitleBlock/>
            <InputBlock/>
            <TasksList
                tasks={tasks}
            />
            <FilterBtnBlock/>
        </div>
    );
};

