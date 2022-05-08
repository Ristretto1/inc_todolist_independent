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
    checkboxStatusSwitcher: (tdlId: string, id: string, status: boolean) => void
    filter: FilterType
    tdlTitle: string
    tdlId: string
    removeTdl: (tdlId: string) => void
}

export const Todolist: React.FC<TodolistPropsType> = ({tasks, filterSwitcher, removeTask, addTask, checkboxStatusSwitcher, filter, tdlTitle, tdlId, removeTdl}) => {

    const onAddTaskHandler = (title: string) => addTask(tdlId, title)

    return (
        <div>
            <TdlTitleBlock
                tdlId={tdlId}
                title={tdlTitle}
                removeTdl={removeTdl}
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

