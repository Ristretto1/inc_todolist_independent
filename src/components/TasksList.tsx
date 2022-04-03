import React, {ChangeEvent} from 'react';
import {Button} from './Button';
import {TaskType} from '../App';

type TasksListPropsType = {
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    checkboxSwitcher: (id: string, checkboxStatus: boolean) => void
}

export const TasksList: React.FC<TasksListPropsType> = ({checkboxSwitcher, removeTask, tasks}) => {

    const removeTaskHandler = (taskId: string) => removeTask(taskId)
    const onCheckBoxHandler = (id: string, e: ChangeEvent<HTMLInputElement>) => {
        checkboxSwitcher (id, e.currentTarget.checked)
    }

    return (
        <ul>
            {tasks.map(t => {
                return (
                    <li key={t.id}>
                        <input
                            type="checkbox"
                            checked={t.isDone}
                            onChange={(e) =>onCheckBoxHandler(t.id, e)}
                        />
                        <span>{t.task}</span>
                        <Button name={'x'} callback={() => removeTaskHandler(t.id)}/>
                    </li>
                )
            })}
        </ul>
    );
};

