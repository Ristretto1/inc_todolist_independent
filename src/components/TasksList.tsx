import React, {ChangeEvent} from 'react';
import {Button} from './Button';
import {TaskType} from '../App';

type TasksListPropsType = {
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    switchCheckbox: (taskId: string, status: boolean) => void
}

export const TasksList: React.FC<TasksListPropsType> = ({tasks, removeTask, switchCheckbox}) => {
    return (
        <ul>
            {tasks.map(t => {

                const onRemoveTaskHandler = () => removeTask(t.id)
                const onSwitchCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => switchCheckbox(t.id, e.currentTarget.checked)

                return (
                    <li key={t.id}>
                        <input
                            type="checkbox"
                            checked={t.isDone}
                            onChange={onSwitchCheckboxHandler}
                        />
                        <span>{t.title}</span>
                        <Button name={'X'} callback={onRemoveTaskHandler}/>
                    </li>
                )
            })}
        </ul>
    );
};

