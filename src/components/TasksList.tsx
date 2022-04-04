import React, {ChangeEvent} from 'react';
import {Button} from './Button';
import {TaskType} from '../App';

type TasksListPropsType = {
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    checkboxSwitcher: (checkboxStatus:boolean, taskId: string) => void
}

export const TasksList: React.FC<TasksListPropsType> = ({checkboxSwitcher,removeTask, tasks}) => {

    const removeTaskHandler = (taskId: string) => removeTask(taskId)
    const onChechboxHandler = (e: ChangeEvent<HTMLInputElement>, taskId: string) => {
        checkboxSwitcher(e.currentTarget.checked, taskId)
    }

    return (
        <ul>
            {tasks.map(t => {
                return (
                    <li className={t.isDone ? 'taskIsDone' : ''} key={t.id}>
                        <input
                            type="checkbox"
                            checked={t.isDone}
                            onChange={(e) => onChechboxHandler(e, t.id)}
                        />
                        <span>{t.task}</span>
                        <Button name={'x'} callback={() => removeTaskHandler(t.id)}/>
                    </li>
                )
            })}
        </ul>
    );
};

