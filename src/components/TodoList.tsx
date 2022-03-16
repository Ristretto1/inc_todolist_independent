import React from 'react';
import {FilterValueType, TaskType} from '../App';
import TodoListHeader from './TodoListHeader';
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
                    <button className={'activeFilter'} onClick={() => props.changeFilter('all')}>All</button>
                    <button onClick={() => props.changeFilter('active')}>Active</button>
                    <button onClick={() => props.changeFilter('completed')}>Completed</button>
                </div>
            </div>
        </div>
    );
};

export default TodoList;