import React from 'react';
import {TasksType} from "../App";
import Button from "./Button";

type TasksListPropsType = {
    tasks: Array<TasksType>,
    removeTask: (value: string)=>void
}

const TasksList = (props: TasksListPropsType) => {
    return (
        <ul>
            {props.tasks.map((t, index) => {
                const onClickRemoveTaskHandler = ()=>props.removeTask(t.id)

                return (
                    <li key ={index}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <Button name={'x'} callback={onClickRemoveTaskHandler}/>
                    </li>
                )
            })}
        </ul>
    );
};

export default TasksList;