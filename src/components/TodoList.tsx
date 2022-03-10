import React from 'react';
import TodoListTitle from "./TodoListTitle";
import TasksList from "./TasksList";
import Button from "./Button";
import {FilterType, TasksType} from "../App";
import FullInput from "./FullInput";

type TodoListPropsType = {
    title: string,
    tasks: Array<TasksType>,
    removeTask: (value: string)=>void
    filteredTask: (value: FilterType)=>void
    addTask: (value: string)=>void
}

const TodoList = (props: TodoListPropsType) => {

    // Блок с функциями для кнопок фильтрации
    const onClickAllHandler =()=>props.filteredTask('All')
    const onClickActiveHandler =()=>props.filteredTask('Active')
    const onClickCompletedHandler =()=>props.filteredTask('Completed')



    return (
        <div>
            <TodoListTitle title={props.title}/>

            {/* Блок инпут + кнопка */}
            <FullInput addTask={props.addTask}/>

            {/* Блок со списком задач */}
            <TasksList tasks={props.tasks} removeTask={props.removeTask}/>

            <div> {/* Блок с кнопками фильтрации */}
                <Button name={'All'} callback={onClickAllHandler}/>
                <Button name={'Active'} callback={onClickActiveHandler}/>
                <Button name={'Completed'} callback={onClickCompletedHandler}/>
            </div>
        </div>
    );
};

export default TodoList;