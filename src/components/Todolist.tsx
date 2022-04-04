import React from 'react';
import {Button} from './Button';
import {InputBlock} from './InputBlock';
import {TasksList} from './TasksList';
import {FilterType, TaskType} from '../App';
import {FilterBtnBlock} from './FilterBtnBlock';

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
    setFilter: (filter: FilterType) => void
    filter: FilterType
}

export const Todolist: React.FC<TodolistPropsType> = ({filter, setFilter, tasks, title,}) => {
    return (
        <div>
            <h3>
                {title}
                <Button name={'X'} callback={() => {
                }}/>
            </h3>
            <InputBlock/>
            <TasksList
                tasks={tasks}
            />
            <FilterBtnBlock
                setFilter={setFilter}
                filter={filter}
            />
        </div>
    );
};

