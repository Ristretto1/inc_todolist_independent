import React from 'react';
import {TdlTitleBlock} from './TdlTitleBlock';
import {InputBlock} from './InputBlock/InputBlock';
import {TasksList} from './TasksList/TasksList';
import {FilterBtnBlock} from './FilterBtnBlock/FilterBtnBlock';
import {FilterType, TaskType} from '../App';

type TodolistPropsType = {
    tasks: Array<TaskType>
    filterSwitcher: (tdlId: string, filter: FilterType) => void
    removeTask: (tdlId: string, id: string) => void
    addTask: (tdlId: string, title: string) => void
    checkboxStatusSwitcher: (id: string, status: boolean) => void
    filter: FilterType
    tdlTitle: string
    tdlId: string
}

export const Todolist: React.FC<TodolistPropsType> = ({tasks, filterSwitcher, removeTask, addTask, checkboxStatusSwitcher, filter, tdlTitle, tdlId}) => {

    const onAddTaskHandler = (title: string) => addTask(tdlId, title)


    return (
        <div>
            <TdlTitleBlock
                title={tdlTitle}
            />
            <InputBlock
                callback={onAddTaskHandler}
            />
            <TasksList
                tasks={tasks}
                removeTask={removeTask}
                checkboxStatusSwitcher={checkboxStatusSwitcher}
                tdlId={tdlId}
            />
            <FilterBtnBlock
                filterSwitcher={filterSwitcher}
                filter={filter}
                tdlId={tdlId}
            />
        </div>
    );
};

