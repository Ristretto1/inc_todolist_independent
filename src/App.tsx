import React, {useState} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import {v1} from 'uuid';

export type FilterType = 'all' | 'active' | 'completed'

export type TaskType = {
    id: string,
    task: string,
    isDone: boolean
}

function App() {
    const [filter, setFilter] = useState<FilterType>('all')
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), task: 'q1', isDone: false},
        {id: v1(), task: 'q1', isDone: true},
        {id: v1(), task: 'q1', isDone: true},
        {id: v1(), task: 'q1', isDone: false},
        {id: v1(), task: 'q1', isDone: true},
    ])

    let filteredTask = tasks
    if (filter === 'active') filteredTask = tasks.filter(t => !t.isDone)
    if (filter === 'completed') filteredTask = tasks.filter(t => t.isDone)
    const filterSwitcher = (filter: FilterType) => {
        setFilter(filter)
    }

    const removeTask = (id: string) => {
        setTasks(tasks.filter(t => t.id !== id))
    }

    const addTask = (title: string) => {
        const newTask = {id: v1(), task: title, isDone: false}
        setTasks([newTask, ...tasks])
    }

    const checkboxStatusSwitcher = (id: string, isDone: boolean) => {
        let task = tasks.find(t => t.id === id)
        if (task) task.isDone = isDone
        const copy = [...tasks]
        setTasks(copy)
    }

    return (
        <div className="App">
            <TodoList
                tasks={filteredTask}
                filterSwitcher={filterSwitcher}
                removeTask={removeTask}
                addTask={addTask}
                checkboxStatusSwitcher={checkboxStatusSwitcher}
                filter = {filter}
            />
        </div>
    );
}

export default App;
