import React, {useState} from 'react';
import './App.css';
import {Button} from './components/Button';
import {v1} from 'uuid';
import {TasksList} from './components/TasksList';
import {FilterBtnBlock} from './components/FilterBtnBlock';
import {InputBlock} from './components/InputBlock';

export type TaskType = {
    id: string
    task: string
    isDone: boolean
}

export type FilterType = 'all' | 'active' | 'completed'

function App() {

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), task: '1', isDone: false},
        {id: v1(), task: '2', isDone: false},
        {id: v1(), task: '3', isDone: true},
        {id: v1(), task: '4', isDone: true},
    ])

    const removeTask = (id: string) => {
        setTasks(tasks.filter(t => t.id !== id))
    }

    const [filter, setFilter] = useState<FilterType>('all')
    let filteredTasks = tasks
    if (filter === 'completed') filteredTasks = tasks.filter(t => t.isDone)
    if (filter === 'active') filteredTasks = tasks.filter(t => !t.isDone)

    const checkboxSwitcher = (id: string, isDone: boolean) => {
        const task = tasks.find(t => t.id === id)
        if (task) task.isDone = isDone
        const copy = [...tasks]
        setTasks(copy)
    }

    return (
        <div className="App">
            <div>
                <h3>What to learn</h3>

                <InputBlock/>

                <TasksList tasks={filteredTasks} removeTask={removeTask} checkboxSwitcher={checkboxSwitcher}/>
                <FilterBtnBlock setFilter={setFilter}/>
            </div>
        </div>
    );
}

export default App;
