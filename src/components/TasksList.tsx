import React, {ChangeEvent} from 'react';
import {Button} from './Button';
import {TaskType} from '../App';

type TasksListPropsType = {
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    checkboxStatusSwitcher: (id: string, status: boolean) => void
}

export const TasksList: React.FC<TasksListPropsType> = ({tasks, removeTask,checkboxStatusSwitcher}) => {
    return (
        <ul>
            {tasks.map(t => {
                const onRemoveBtnHandler = () => removeTask(t.id)

                const onChangeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
                    checkboxStatusSwitcher(t.id, e.currentTarget.checked)
                }

                return (
                    <li key={t.id}>
                        <input
                            type="checkbox"
                            checked={t.isDone}
                            onChange={onChangeCheckboxHandler}
                        />
                        <span>{t.task}</span>
                        <Button name={'X'} callback={onRemoveBtnHandler}/>
                    </li>
                )
            })}
        </ul>
    );
};

