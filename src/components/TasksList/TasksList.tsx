import React, {ChangeEvent} from 'react';
import {Button} from "../Button";
import {TaskType} from "../../App";
import s from './TasksList.module.css'

type TasksListPropsType ={
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    checkboxStatusSwitcher: (id: string, status: boolean) => void
}

export const TasksList: React.FC<TasksListPropsType> = ({tasks, removeTask, checkboxStatusSwitcher}) => {
    return (
        <ul>
            {tasks.map(t => {

                const onRemoveTaskHandler = (id: string) => {
                    removeTask(id)
                }
                const onChangeCheckBoxHandler = (e: ChangeEvent<HTMLInputElement>) => {
                    checkboxStatusSwitcher(t.id, e.currentTarget.checked)
                }


                return (
                    <li key={t.id} className={t.isDone ? s.taskIsDone : ''}>
                        <input
                            type="checkbox"
                            checked={t.isDone}
                            onChange={onChangeCheckBoxHandler}
                        />
                        <span>{t.title}</span>
                        <Button name={'X'} callback={() => onRemoveTaskHandler(t.id)}/>
                    </li>
                )
            })}
        </ul>
    );
};

