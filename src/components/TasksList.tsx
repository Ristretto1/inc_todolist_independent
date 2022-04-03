import React, {ChangeEvent} from 'react';
import {Button} from './Button';
import {TaskType} from '../App';

type TasksListPropsType = {
    tasks: Array<TaskType>
    removeTask: (todolistId: string, taskId: string) => void
    checkboxSwitcher: (todolistId: string, id: string, checkboxStatus: boolean) => void
    todolistId: string
}

export const TasksList: React.FC<TasksListPropsType> = ({todolistId, checkboxSwitcher, removeTask, tasks}) => {

    const removeTaskHandler = (taskId: string) => removeTask(todolistId,taskId)
    const onCheckBoxHandler = (id: string, e: ChangeEvent<HTMLInputElement>) => {
        checkboxSwitcher(todolistId, id, e.currentTarget.checked)
    }

    return (
        <ul>
            {tasks.map(t => {
                return (
                    <li key={t.id}>
                        <input
                            type="checkbox"
                            checked={t.isDone}
                            onChange={(e) => onCheckBoxHandler(t.id, e)}
                        />
                        <span>{t.task}</span>
                        <Button name={'x'} callback={() => removeTaskHandler(t.id)}/>
                    </li>
                )
            })}
        </ul>
    );
};

