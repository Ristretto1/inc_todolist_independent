import React, {useState} from 'react';
import './App.css';
import {Button} from './components/Button';
import {FilterBtnBlock} from './components/FilterBtnBlock';
import {TasksList} from './components/TasksList';
import {InputBlock} from './components/InputBlock';
import {TdlTitleBlock} from './components/TdlTitleBlock';
import {v1} from 'uuid';
import {Todolist} from './components/Todolist';
import set = Reflect.set;

export type TaskType = {
    id: string,
    task: string,
    isDone: boolean
}

export type FilterType = 'all' | 'active' | 'completed'

function App() {

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), task: '0', isDone: false},
        {id: v1(), task: '1', isDone: true},
        {id: v1(), task: '2', isDone: true},
        {id: v1(), task: '3', isDone: true},
        {id: v1(), task: '4', isDone: false},
        {id: v1(), task: '5', isDone: false},
    ])

    const [filter, setFilter] = useState<FilterType>('all')
    let filteredTasks = tasks
    if (filter === 'completed') filteredTasks = tasks.filter(t => t.isDone)
    if (filter === 'active') filteredTasks = tasks.filter(t => !t.isDone)
    const filterSwitcher = (value: FilterType) => setFilter(value)

    const removeTask = (taskId: string) => setTasks(tasks.filter(t => t.id !== taskId))

    const addTask = (title: string) => {
        const newTask = {id: v1(), task: title, isDone: false}
        setTasks([newTask, ...tasks])
    }

    return (
        <div className="App">
            <Todolist
                tasks={filteredTasks}
                filterSwitcher={filterSwitcher}
                removeTask={removeTask}
                addTask={addTask}
            />
        </div>
    );
}

export default App;
