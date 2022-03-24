import React, {ChangeEvent} from 'react';
import {Button} from './Button';
import {TaskType} from '../App';

type TasksListPropsType ={
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    CheckboxSwitch: (id: string, done: boolean) => void
}

export const TasksList:React.FC<TasksListPropsType> = ({tasks, removeTask, CheckboxSwitch}) => {

    const onRemoveTaskHandler = (id: string) => removeTask(id)
    const onCheckboxSwitchHandler = (id: string, e: ChangeEvent<HTMLInputElement>) => {
        CheckboxSwitch(id, e.currentTarget.checked)
    }

    return (
        <ul>
        {tasks.map(t => {
            return (
                    <li key={t.id}>
                        <input
                            type="checkbox"
                            checked={t.isDone}
                            onChange={(e)=>onCheckboxSwitchHandler(t.id, e)}
                        />
                        <span>{t.task}</span>
                        <Button name={'x'} callback={() => onRemoveTaskHandler(t.id)}/>
                    </li>
            )
            })}
        </ul>
         );
};

