import React, {ChangeEvent} from 'react';
import {TaskType} from '../App';
import Button from './Button';

type TasksListPropsType = {
    tasks: Array<TaskType>,
    removeTask: (id: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
}

const TasksList: React.FC<TasksListPropsType> = (props) => {

    let tasksList = props.tasks.map(t => {
        const onClickRemoveHandler = () => {
            props.removeTask(t.id)
        }

        const onChangeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeTaskStatus(t.id, e.currentTarget.checked)
        }

        return (
            <li key={t.id} className={t.isDone ? 'isDone' : ''}>
                <input type="checkbox"
                       onChange={onChangeCheckboxHandler}
                       checked={t.isDone}
                />
                <span>{t.title}</span>
                <Button name={'X'} callBack={onClickRemoveHandler}/>
            </li>
        )
    });

    return (
        <ul>
            {tasksList}
        </ul>
    );
};

export default TasksList;