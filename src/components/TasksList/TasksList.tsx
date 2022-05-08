import React, {ChangeEvent} from 'react';
import {Button} from '../Button';
import {TaskType} from '../../App';
import s from './TasksList.module.css'

type TasksListPropsType = {
    tasks: Array<TaskType>
    removeTask: (tdlId: string, id: string) => void
    checkboxStatusSwitcher: (tdlId: string, id: string, status: boolean) => void
    tdlId: string
}

export const TasksList: React.FC<TasksListPropsType> = ({tasks, removeTask, checkboxStatusSwitcher, tdlId}) => {
    return (
        <ul>
            {tasks.map(t => {
                const onRemoveBtnHandler = () => removeTask(tdlId, t.id)

                const onChangeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
                    checkboxStatusSwitcher(tdlId, t.id, e.currentTarget.checked)
                }

                return (
                    <li key={t.id} className={t.isDone ? s.taskIsDone : ''}>
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

