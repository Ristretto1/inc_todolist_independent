import React from 'react';
import {Button} from './Button';
import {TaskType} from '../App';

type TasksListPropsType = {
    tasks: Array<TaskType>
    removeTask: (id:string) => void
}

export const TasksList: React.FC<TasksListPropsType> = ({tasks, removeTask}) => {

    const onRemoveButtonHandler = (id: string) => {
        removeTask(id)
    }

    return (
        <ul>
            {tasks.map(t => {
                return (
                    <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.task}</span>
                        <Button name={'x'} callback={() => onRemoveButtonHandler(t.id)}/>
                    </li>
                )
            })}
        </ul>
    );
};

