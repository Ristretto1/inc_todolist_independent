import React from 'react';
import {Button} from './Button';
import {TaskType} from '../App';

type TasksListPropsType = {
    tasks: Array<TaskType>
    removeTask: (id: string) => void
}

export const TasksList: React.FC<TasksListPropsType> = ({tasks, removeTask}) => {
    return (
        <ul>
            {tasks.map(t => {
                const onRemoveBtnHandler = () => {
                    removeTask(t.id)
                }
                return (
                    <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.task}</span>
                        <Button name={'X'} callback={onRemoveBtnHandler}/>
                    </li>
                )
            })}
        </ul>
    );
};

