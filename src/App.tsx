import React, {useState} from 'react';
import './App.css';
import {v1} from 'uuid';
import {Todolist} from './components/Todolist';

export type TaskType = {
    id: string,
    task: string,
    isDone: boolean
}

export type FilterType = 'all' | 'active' | 'completed'

export type TodolistType = {
    id: string
    title: string
    filter: FilterType
}

function App() {

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), task: '0', isDone: false},
        {id: v1(), task: '1', isDone: true},
        {id: v1(), task: '2', isDone: true},
        {id: v1(), task: '3', isDone: true},
        {id: v1(), task: '4', isDone: false},
        {id: v1(), task: '5', isDone: false},
    ])

    const [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: v1(), title: '1', filter: 'all'},
        {id: v1(), title: '2', filter: 'all'},
    ])


    const filterSwitcher = (tdlId: string, value: FilterType) => setTodolists(todolists.map(tdl => tdl.id === tdlId ? {...tdl, filter: value} : tdl))

    const removeTask = (taskId: string) => setTasks(tasks.filter(t => t.id !== taskId))

    const addTask = (title: string) => {
        const newTask = {id: v1(), task: title, isDone: false}
        setTasks([newTask, ...tasks])
    }

    const checkboxStatusSwitcher = (id: string, status: boolean) => {
        setTasks(tasks.map(t => t.id === id ? {...t, isDone: status} : t))
    }

    return (
        <div className="App">
            {todolists.map(tdl => {
                let filteredTasks = tasks
                if (tdl.filter === 'completed') filteredTasks = tasks.filter(t => t.isDone)
                if (tdl.filter === 'active') filteredTasks = tasks.filter(t => !t.isDone)
                return (
                    <Todolist
                        key={tdl.id}
                        tdlId={tdl.id}
                        tasks={filteredTasks}
                        filterSwitcher={filterSwitcher}
                        removeTask={removeTask}
                        addTask={addTask}
                        checkboxStatusSwitcher={checkboxStatusSwitcher}
                        filter={tdl.filter}
                        tdlTitle={tdl.title}
                    />
                )
            })}
        </div>
    );
}

export default App;
