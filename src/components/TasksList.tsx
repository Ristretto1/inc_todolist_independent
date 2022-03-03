import React from 'react';
import {TasksType} from "./TodoList";

type TasksListPropsType = {
    tasks: Array<TasksType>
}

const TasksList = (props:TasksListPropsType) => {
    return (
        <ul>
            <li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>
            <li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>
            <li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>
        </ul>
    );
};

export default TasksList;