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
    editTask: (tdlId: string, taskId: string, title: string) => void
    editTdl: (tdlId: string, title: string) => void
}

export const Todolist: React.FC<TodolistPropsType> = ({tdlId, tdlTitle, tasks, removeTask, addTask, switchFilter, switchCheckbox, removeTdl, editTask, editTdl}) => {

    const onSwitchFilterHandler = (value: FilterType) => switchFilter(tdlId, value)
    const onSwitchCheckboxHandler = (taskId: string, status: boolean) => switchCheckbox(tdlId, taskId, status)
    const onRemoveTaskHandler = (taskId: string) => removeTask(tdlId, taskId)
    const onAddTaskHandler = (title: string) => addTask(tdlId, title)
    const onRemoveTdlHandler = () => removeTdl(tdlId)
    const onEditTaskHandler = (taskId: string, title: string) => editTask(tdlId, taskId, title)
    const onEditTdlHandler = (title: string) => editTdl(tdlId, title)

    return (
        <div>
            <TdlTitleBlock
                tdlTitle={tdlTitle}
                editTdl={onEditTdlHandler}
                removeTdl={onRemoveTdlHandler}
            />

            <FullInput
                addItem={onAddTaskHandler}
            />

            <TasksList
                tasks={tasks}
                removeTask={onRemoveTaskHandler}
                switchCheckbox={onSwitchCheckboxHandler}
                editTask={onEditTaskHandler}
            />

            <FilterBtnBlock
                switchFilter={onSwitchFilterHandler}
            />
        </div>
    );
};

