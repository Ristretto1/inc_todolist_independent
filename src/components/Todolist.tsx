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
    removeTask: (tdlId: string, taskId: string) => void
    addTask: (tdlId: string, title: string) => void
    switchFilter: (tdlId: string, value: FilterType) => void
    switchCheckbox: (tdlId: string, taskId: string, status: boolean) => void
    removeTdl: (tdlId: string) => void
}

export const Todolist: React.FC<TodolistPropsType> = ({tdlId, tdlTitle, tasks, removeTask, addTask, switchFilter, switchCheckbox, removeTdl}) => {

    const onSwitchFilterHandler = (value: FilterType) => switchFilter(tdlId, value)
    const onSwitchCheckboxHandler = (taskId: string, status: boolean) => switchCheckbox(tdlId, taskId, status)
    const onRemoveTaskHandler = (taskId: string) => removeTask(tdlId, taskId)
    const onAddTaskHandler = (title: string) => addTask(tdlId, title)
    const onRemoveTdlHandler = () => removeTdl(tdlId)

    return (
        <div>
            <TdlTitleBlock
                tdlTitle={tdlTitle}
                removeTdl={onRemoveTdlHandler}
            />

            <FullInput
                addItem={onAddTaskHandler}
            />

            <TasksList
                tasks={tasks}
                removeTask={onRemoveTaskHandler}
                switchCheckbox={onSwitchCheckboxHandler}
            />

            <FilterBtnBlock
                switchFilter={onSwitchFilterHandler}
            />
        </div>
    );
};

