import React from 'react';
import {FilterValueType, TaskType} from '../App';
import TodoListHeader from './TodoListHeader';
import Button from './Button';
import TasksList from './TasksList';
import InputBlock from './InputBlock';

type TodoListPropsType = {
    title: string,
    tasks: Array<TaskType>,
    removeTask: (id: string) => void
    changeFilter: (filter: FilterValueType) => void
    addTask: (id: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
}

const TodoList: React.FC<TodoListPropsType> = (props) => {
    return (
        <div>
            <div>
                <TodoListHeader title={props.title}/>
                <InputBlock addTask={props.addTask}/>

                <TasksList
                    tasks={props.tasks}
                    removeTask={props.removeTask}
                    changeTaskStatus={props.changeTaskStatus}
                />

                <div>
                    <Button name={'All'} callBack={() => props.changeFilter('all')}/>
                    <Button name={'Active'} callBack={() => props.changeFilter('active')}/>
                    <Button name={'Completed'} callBack={() => props.changeFilter('completed')}/>
                </div>
            </div>
        </div>
    );
};

export default TodoList;