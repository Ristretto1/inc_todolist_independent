import React from 'react';
import TodoListTitle from "./TodoListTitle";
import TasksList from "./TasksList";
import Button from "./Button";

export type TasksType = {
    id: number,
    title: string,
    isDone: boolean
}

type TodoListPropsType = {
    title: string,
    tasks: Array<TasksType>,
    removeTask: (value: number)=>void
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
                <Button title={'All'}/>
                <Button title={'Active'}/>
                <Button title={'Completed'}/>
            </div>
        </div>
    );
};

export default TodoList;