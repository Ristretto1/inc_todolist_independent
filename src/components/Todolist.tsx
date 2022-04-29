import React from 'react';
import {FullInput} from "./FullInput";
import {FilterBtnBlock} from "./FilterBtnBlock";
import {TasksList} from "./TasksList";
import {Button} from "./Button";
import {TaskType} from "../App";

type TodolistPropsType = {
    tasks: Array<TaskType>
    removeTask: (id: string) => void
}

export const Todolist: React.FC<TodolistPropsType> = ({tasks, removeTask}) => {
    return (
        <div>
            <h3>
                What to learn
                <Button name={'X'} callback={() => {
                }}/>
            </h3>
            <FullInput/>
            <TasksList
                tasks={tasks}
                removeTask={removeTask}
            />
            <FilterBtnBlock/>
        </div>
    );
};

