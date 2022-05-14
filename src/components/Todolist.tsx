import React from 'react';
import {Button} from './Button';
import {FilterType, TaskType} from '../App';
import {TasksList} from './TasksList';
import {FilterBtnBlock} from './FilterBtnBlock';
import {FullInput} from './FullInput';
import {TdlTitleBlock} from './TdlTitleBlock';

type TodolistPropsType = {
    tdlId: string
    tdlTitle: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    addTask: (title: string) => void
    switchFilter: (tdlId: string, value: FilterType) => void
    switchCheckbox: (tdlId: string, taskId: string, status: boolean) => void
}

export const Todolist: React.FC<TodolistPropsType> = ({tdlId, tdlTitle, tasks, removeTask, addTask, switchFilter, switchCheckbox}) => {

    const onSwitchFilterHandler = (value: FilterType) => switchFilter(tdlId, value)
    const onSwitchCheckboxHandler = (taskId: string, status: boolean) => switchCheckbox(tdlId, taskId, status)

    return (
        <div>
            <TdlTitleBlock
                tdlTitle={tdlTitle}
            />

            <FullInput
                addItem={addTask}
            />

            <TasksList
                tasks={tasks}
                removeTask={removeTask}
                switchCheckbox={onSwitchCheckboxHandler}
            />

            <FilterBtnBlock
                switchFilter={onSwitchFilterHandler}
            />
        </div>
    );
};

