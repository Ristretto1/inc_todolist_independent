import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";
import {v1} from "uuid";

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

export type FilterType = 'all' | 'active' | 'completed'

function App() {

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Hello world", isDone: true},
        {id: v1(), title: "I am Happy", isDone: false},
        {id: v1(), title: "Yo", isDone: false}
    ])

    const [filter, setFilter] = useState<FilterType>('all')
    let filteredTask = tasks

    if (filter === 'active') filteredTask = tasks.filter(t=>!t.isDone)
    if (filter === 'completed') filteredTask = tasks.filter(t=>t.isDone)

    const changeFilter = (value: FilterType) => setFilter(value)

    const removeTask = (id: string) => {
        setTasks(tasks.filter(t => t.id !== id))
    }
    const addTask = (title: string) => {
        let newTask = {id: v1(), title: title, isDone: false}
        setTasks([newTask, ...tasks])
    }




    return (
        <div className="App">
            <Todolist
                tasks={filteredTask}
                removeTask={removeTask}
                addTask={addTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
