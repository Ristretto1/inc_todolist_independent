import React, {ChangeEvent} from 'react';
import {Button} from './Button';
import {TaskType} from '../App';

type TasksListPropsType = {
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    CheckBoxSwitcher: (id: string, isDone: boolean) => void
}

export const TasksList: React.FC<TasksListPropsType> = ({tasks, removeTask, CheckBoxSwitcher}) => {

    const onClickRemoveTask = (id: string) => {
        removeTask(id)
    }

    const onChangeCheckBoxSwitcher = (id: string, e: ChangeEvent<HTMLInputElement>) => {
        CheckBoxSwitcher(id, e.currentTarget.checked)
    }

    return (
        <ul>
            {tasks.map(t => {
                return (
                    <li key={t.id} className={t.isDone ? 'taskDone' : ''}>
                        <input
                            type="checkbox"
                            checked={t.isDone}
                            onChange={(e) => onChangeCheckBoxSwitcher(t.id, e)}
                        />
                        <span>{t.task}</span>
                        <Button name={'x'} callback={() => onClickRemoveTask(t.id)}/>
                    </li>
                )
            })}
        </ul>
    );
};

