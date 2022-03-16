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
    filter: FilterValueType
}

const TodoList: React.FC<TodoListPropsType> = (props) => {

const changedFilterHandler = (FilterValues: FilterValueType) => {
    props.changeFilter(FilterValues)
    }

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
                    <button className={props.filter === 'all' ? 'activeFilter': ''} onClick={() => changedFilterHandler('all')}>All</button>
                    <button className={props.filter === 'active' ? 'activeFilter': ''} onClick={() => changedFilterHandler('active')}>Active</button>
                    <button className={props.filter === 'completed' ? 'activeFilter': ''} onClick={() => changedFilterHandler('completed')}>Completed</button>
                </div>
            </div>
        </div>
    );
};

export default TodoList;