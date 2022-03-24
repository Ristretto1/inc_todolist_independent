import React, {ChangeEvent} from 'react';
import {Button} from './Button';
import {TaskType} from '../App';

type TasksListPropsType = {
    tasks: Array<TaskType>
    removeTask: (id: string, TLid: string) => void
    checkboxSwitch: (id: string, done: boolean, TLid: string) => void
    TLid: string
}

export const TasksList: React.FC<TasksListPropsType> = ({TLid, tasks, removeTask, checkboxSwitch}) => {

    const onRemoveTaskHandler = (id: string) => removeTask(id, TLid)
    const onCheckboxSwitchHandler = (id: string, e: ChangeEvent<HTMLInputElement>) => {
        checkboxSwitch(id, e.currentTarget.checked, TLid)
    }

    return (
        <ul>
            {tasks.map(t => {
                return (
                    <li key={t.id} className={t.isDone ? 'taskIsDone' : ''}>
                        <input
                            type="checkbox"
                            checked={t.isDone}
                            onChange={(e) => onCheckboxSwitchHandler(t.id, e)}
                        />
                        <span>{t.task}</span>
                        <Button name={'x'} callback={() => onRemoveTaskHandler(t.id)}/>
                    </li>
                )
            })}
        </ul>
    );
};

