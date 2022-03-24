import React, {useState} from 'react';
import './App.css';
import {Button} from './components/Button';
import {v1} from 'uuid';
import {TasksList} from './components/TasksList';
import {TodoList} from './components/TodoList';

export type TaskType = {
    id: string
    task: string
    isDone: boolean
}
export type FilterType = 'all' | 'active' | 'completed'

function App() {
    const [filter, setFilter] = useState<FilterType>('all')
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), task: '1', isDone: false},
        {id: v1(), task: '2', isDone: false},
        {id: v1(), task: '3', isDone: true},
        {id: v1(), task: '4', isDone: true},
    ])

    const removeTask = (id: string) => setTasks(tasks.filter(t => t.id !== id))
    const checkboxSwitch = (id: string, done: boolean) => {
        setTasks(tasks.map(t => t.id === id ? {...t, isDone: done} : t))
    }
    const addTask = (title: string) => {
        const newTask = {id: v1(), task: title, isDone: false}
        setTasks([newTask, ...tasks])
    }

    let filteredTask = tasks
    if (filter === 'completed') filteredTask = tasks.filter(t => t.isDone)
    if (filter === 'active') filteredTask = tasks.filter(t => !t.isDone)

    return (
        <div className="App">
            <TodoList
                addTask={addTask}
                tasks={filteredTask}
                removeTask={removeTask}
                checkboxSwitch={checkboxSwitch}
                setFilter={setFilter}
            />
        </div>
    );
}

export default App;
