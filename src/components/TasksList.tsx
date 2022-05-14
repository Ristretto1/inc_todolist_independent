import React, {ChangeEvent} from 'react';
import {Button} from './Button';
import {TaskType} from '../App';
import {EditableSpan} from './EditableSpan';

type TasksListPropsType = {
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    switchCheckbox: (taskId: string, status: boolean) => void
    editTask: (taskId: string, title: string) => void
}

export const TasksList: React.FC<TasksListPropsType> = ({tasks, removeTask, switchCheckbox, editTask}) => {
    return (
        <ul>
            {tasks.map(t => {

                const onRemoveTaskHandler = () => removeTask(t.id)
                const onSwitchCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => switchCheckbox(t.id, e.currentTarget.checked)
                const onEditTaskHandler = (title: string) => editTask(t.id, title)

                return (
                    <li key={t.id}>
                        <input
                            type="checkbox"
                            checked={t.isDone}
                            onChange={onSwitchCheckboxHandler}
                        />
                        <EditableSpan spanText={t.title} editItem={onEditTaskHandler}/>
                        <Button name={'X'} callback={onRemoveTaskHandler}/>
                    </li>
                )
            })}
        </ul>
    );
};

