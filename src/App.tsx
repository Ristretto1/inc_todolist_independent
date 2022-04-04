import React, {useState} from 'react';
import './App.css';
import {Button} from './components/Button';
import {v1} from 'uuid';
import {strict} from 'assert';
import {FilterBtnBlock} from './components/FilterBtnBlock';
import {TasksList} from './components/TasksList';
import {InputBlock} from './components/InputBlock';
import {Todolist} from './components/Todolist';

export type TaskType = {
    id: string
    task: string
    isDone: boolean
}

export type FilterType = 'all' | 'active' | 'completed'

function App() {
    const [filter, setFilter] = useState<FilterType>('all')
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), task: '111', isDone: false},
        {id: v1(), task: '222', isDone: true},
        {id: v1(), task: '333', isDone: true},
        {id: v1(), task: '444', isDone: false},
    ])

    let filteredTasks = tasks
    if (filter === 'completed') filteredTasks = tasks.filter(t => t.isDone)
    if (filter === 'active') filteredTasks = tasks.filter(t => !t.isDone)

    const addTask = (title: string) => {
        const newTask = {id: v1(), task: title, isDone: false}
        setTasks([newTask, ...tasks])
    }

    const removeTask = (taskId: string) => {
        setTasks(tasks.filter(t => t.id !== taskId))
    }

    const checkboxSwitcher = (checkboxStatus: boolean, taskId: string) => {
        setTasks(tasks.map(t => t.id === taskId ? {...t, isDone: checkboxStatus} : t))
    }

    return (
        <div className="App">
            <Todolist
                filter={filter}
                addTask={addTask}
                tasks={filteredTasks}
                setFilter={setFilter}
                removeTask={removeTask}
                checkboxSwitcher={checkboxSwitcher}
            />
        </div>
    );
}

export default App;
