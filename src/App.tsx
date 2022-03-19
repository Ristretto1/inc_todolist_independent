import React, {useState} from 'react';
import './App.css';
import {Button} from './components/Button';
import {v1} from 'uuid';
import {TasksList} from './components/TasksList';
import {Input} from './components/Input';
import InputBlock from './components/InputBlock';
import {TodoList} from './components/TodoList';

export type TaskType = {
    id: string,
    task: string,
    isDone: boolean
}
export type FilterType = 'all' | 'active' | 'completed'

function App() {
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), task: 'o1o', isDone: false},
        {id: v1(), task: 'o2o', isDone: true},
        {id: v1(), task: 'o3o', isDone: false},
        {id: v1(), task: 'o4o', isDone: true},
        {id: v1(), task: 'o5o', isDone: true},
    ])
    const [title, setTitle] = useState<string>('')
    const [filter, setFilter] = useState<FilterType>('all')


    const CheckBoxSwitcher = (id: string, isDone: boolean) => {
        let task = tasks.find(t => t.id === id)
        if (task) {
            task.isDone = isDone
            const copy = [...tasks]
            setTasks(copy)
        }

    }

    const removeTask = (id: string) => {
        setTasks(tasks.filter(t => t.id !== id))
    }

    const addTask = (title: string) => {
        const newTask = {id: v1(), task: title, isDone: false}
        setTasks([newTask, ...tasks])
    }

    let filteredTasks = tasks
    if (filter === 'active') filteredTasks = tasks.filter(t => !t.isDone)
    if (filter === 'completed') filteredTasks = tasks.filter(t => t.isDone)

    return (
        <div className="App">
            <TodoList
                title={title}
                tasks={filteredTasks}
                setTitle={setTitle}
                addTask={addTask}
                removeTask={removeTask}
                setFilter={setFilter}
                CheckBoxSwitcher={CheckBoxSwitcher}
                filter={filter}
            />
        </div>
    );
}

export default App;
