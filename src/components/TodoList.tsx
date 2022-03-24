import React from 'react';
import {Button} from './Button';
import {TasksList} from './TasksList';
import {TaskType} from '../App';
import {InputBlock} from './InputBlock';

type TodoListPropsType = {
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    checkboxSwitch: (id: string, done: boolean) => void
    addTask: (title: string) => void
}

export const TodoList: React.FC<TodoListPropsType> = ({addTask, tasks, removeTask, checkboxSwitch}) => {
    return (
        <div>
            <h3>What to learn</h3>

            <InputBlock addTask={addTask}/>

            <TasksList tasks={tasks} removeTask={removeTask} checkboxSwitch={checkboxSwitch}/>

            <div>
                <Button name={'All'} callback={() => {
                }}/>
                <Button name={'Active'} callback={() => {
                }}/>
                <Button name={'Completed'} callback={() => {
                }}/>
            </div>
        </div>
    );
};

