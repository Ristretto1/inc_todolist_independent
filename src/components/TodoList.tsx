import React from 'react';
import TodoListTitle from "./TodoListTitle";
import TasksList from "./TasksList";
import Button from "./Button";
import {FilterType} from "../App";

export type TasksType = {
    id: number,
    title: string,
    isDone: boolean
}

type TodoListPropsType = {
    title: string,
    tasks: Array<TasksType>,
    removeTask: (value: number)=>void
    filteredTask: (value: FilterType)=>void
}

const TodoList = (props: TodoListPropsType) => {
    return (
        <div>
            <TodoListTitle title={props.title}/>
            <div>
                <input/>
                <button>+</button>
            </div>

            <TasksList tasks={props.tasks} removeTask={props.removeTask}/>

            <div>
                <Button title={'All'} callback={()=>props.filteredTask('All')}/>
                <Button title={'Active'} callback={()=>props.filteredTask('Active')}/>
                <Button title={'Completed'} callback={()=>props.filteredTask('Completed')}/>
            </div>
        </div>
    );
};

export default TodoList;