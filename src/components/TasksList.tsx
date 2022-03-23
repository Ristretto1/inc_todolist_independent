import React from 'react';
import {Button} from './Button';
import {TaskType} from '../App';

type TasksListPropsType = {
    tasks: Array<TaskType>
}

export const TasksList: React.FC<TasksListPropsType> = ({tasks}) => {
    return (
        <ul>
            {tasks.map(t => {
                return (
                    <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.task}</span>
                        <Button name={'x'} callback={() => {
                        }}/>
                    </li>
                )
            })}
        </ul>
    );
};

