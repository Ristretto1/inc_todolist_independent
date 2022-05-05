import React from 'react';
import {FullInput} from "./FullInput";
import {FilterBtnBlock} from "./FilterBtnBlock";
import {TasksList} from "./TasksList";
import {Button} from "./Button";
import {FilterType, TaskType} from "../App";

type TodolistPropsType = {
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    addTask: (title: string) => void
    changeFilter: (value: FilterType) => void
}

export const Todolist: React.FC<TodolistPropsType> = ({tasks, removeTask, addTask, changeFilter}) => {
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
            />
            <FilterBtnBlock
                changeFilter={changeFilter}
            />
        </div>
    );
};

