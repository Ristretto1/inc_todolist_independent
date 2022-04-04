import React from 'react';
import {TaskType} from '../App';
import {Button} from './Button';

type TasksListPropsType = {
    tasks: Array<TaskType>
}

export const TasksList: React.FC<TasksListPropsType> = ({tasks}) => {
    return (
        <ul>
            {tasks.map(t => {
                return (
                    <li key={t.id}>
                        <input
                            type="checkbox"
                            checked={t.isDone}
                            onChange={() => {
                            }}
                        />
                        <span>{t.task}</span>
                        <Button name={'X'} callback={() => {
                        }}/>
                    </li>
                )
            })}
        </ul>
    );
};

