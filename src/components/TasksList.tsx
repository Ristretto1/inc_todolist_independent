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
            {/*<li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>*/}
            {/*<li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>*/}
            {/*<li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>*/}
        </ul>
    );
};

export default TasksList;