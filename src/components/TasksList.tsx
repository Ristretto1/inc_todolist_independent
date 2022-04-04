import React, {ChangeEvent} from 'react';
import {TaskType} from '../App';
import {Button} from './Button';

type TasksListPropsType = {
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    switchCheckboxStatus: (status: boolean, taskId: string) => void
}

export const TasksList: React.FC<TasksListPropsType> = ({switchCheckboxStatus, removeTask, tasks}) => {
    return (
        <ul>
            {tasks.map(t => {

                const removeTaskHandler = (taskId: string) => removeTask(taskId)
                const onSwitchCheckboxStatusHandler = (e: ChangeEvent<HTMLInputElement>, taskId: string) => {
                    switchCheckboxStatus(e.currentTarget.checked, taskId)
                }

                return (
                    <li key={t.id} className={t.isDone ? 'taskIsDone' : ''}>
                        <input
                            type="checkbox"
                            checked={t.isDone}
                            onChange={(e) => onSwitchCheckboxStatusHandler(e, t.id)}
                        />
                        <span>{t.task}</span>
                        <Button name={'X'} callback={() => removeTaskHandler(t.id)}/>
                    </li>
                )
            })}
        </ul>
    );
};

