import React from 'react';
import {Button} from './Button';
import {InputBlock} from './InputBlock';
import {TasksList} from './TasksList';
import {TaskType} from '../App';

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
}

export const Todolist: React.FC<TodolistPropsType> = ({tasks, title,}) => {
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
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

