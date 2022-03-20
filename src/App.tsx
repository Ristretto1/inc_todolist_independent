import React, {useState} from 'react';
import './App.css';
import {Button} from './components/Button';
import {FilterButtonBlock} from './components/FilterButtonBlock';
import {TasksList} from './components/TasksList';
import InputBlock from './components/InputBlock';
import {v1} from 'uuid';
import {Input} from './components/Input';

export type TaskType = {
    id: string,
    task: string,
    isDone: boolean
}

export type FilterType = 'all' | 'active' | 'completed'

function App() {

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), task: 'oo1', isDone: false},
        {id: v1(), task: 'o1o1', isDone: false},
        {id: v1(), task: '1o1o1', isDone: true},
        {id: v1(), task: '11o1o11', isDone: false},
        {id: v1(), task: '11o11o11', isDone: true},
    ])
    const [title, setTitle] = useState<string>('')
    const [filter, setFilter] = useState<FilterType>('all')
    const addTask = (title: string) => {
        const newTask = {id: v1(), task: title, isDone: false}
        setTasks([newTask, ...tasks])
    }
    const removeTask = (id: string) => {
        setTasks(tasks.filter(t => t.id !== id))
    }

    const switchCheckbox = (id: string, isChecked: boolean) => {
        const task = tasks.find(t => t.id === id)
        if (task) task.isDone = isChecked
        const copy = [...tasks]
        setTasks(copy)
    }

    let filteredTasks = tasks
    if (filter === 'active') filteredTasks = tasks.filter(t => !t.isDone)
    if (filter === 'completed') filteredTasks = tasks.filter(t => t.isDone)

    return (
        <div className="App">
            <div>
                <h3>What to learn</h3>

                <InputBlock addTask={addTask} title={title} setTitle={setTitle}/>
                <TasksList tasks={filteredTasks} removeTask={removeTask} switchCheckbox={switchCheckbox}/>
                <FilterButtonBlock filter={filter} setFilter={setFilter}/>
            </div>
        </div>
    );
}

export default App;
