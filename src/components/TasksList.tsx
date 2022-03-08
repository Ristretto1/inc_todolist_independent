import React from 'react';
import {TasksType} from "./TodoList";

type TasksListPropsType = {
    tasks: Array<TasksType>,
    removeTask: (value: number)=>void
}

const TasksList = (props: TasksListPropsType) => {
    return (
        <ul>
            {props.tasks.map((t, index) => {
                return (
                    <li key ={index}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={()=>props.removeTask(t.id) }>x</button>
                    </li>
                )
            })}
        </ul>
    );
};

export default TasksList;