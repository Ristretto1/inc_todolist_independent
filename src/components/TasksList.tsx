import React from 'react';
import {Button} from "./Button";
import {TaskType} from "../App";

type TasksListPropsType ={
    tasks: Array<TaskType>
    removeTask: (id: string) => void
}

export const TasksList: React.FC<TasksListPropsType> = ({tasks, removeTask}) => {
    return (
        <ul>
            {tasks.map(t => {

                const onRemoveTaskHandler = (id: string) => {
                    removeTask(id)
                }

                return (
                    <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <Button name={'X'} callback={() => onRemoveTaskHandler(t.id)}/>
                    </li>
                )
            })}
        </ul>
    );
};

