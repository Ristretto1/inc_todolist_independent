import React, {ChangeEvent} from 'react';
import {Button} from './Button';
import {TaskType} from '../App';

type TasksListPropsType = {
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    switchCheckbox: (id: string, isChecked: boolean) => void
}

export const TasksList: React.FC<TasksListPropsType> = ({tasks, removeTask, switchCheckbox}) => {

    const onRemoveTaskHandler = (id: string) => {
        removeTask(id)
    }

    const onSwitchCheckboxHandler = (id: string, e: ChangeEvent<HTMLInputElement>) => {
        switchCheckbox(id, e.currentTarget.checked)
    }

    return (
        <ul>
            {tasks.map(t => {
                return (
                    <li key={t.id} className={t.isDone ? 'checkedTask' : ''}>
                        <input
                            type="checkbox"
                            checked={t.isDone}
                            onChange={(e) => onSwitchCheckboxHandler(t.id, e)}
                        />
                        <span>{t.task}</span>
                        <Button name={'x'} callback={() => onRemoveTaskHandler(t.id)}/>
                    </li>
                )
            })}
        </ul>
    );
};

