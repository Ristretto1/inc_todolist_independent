import React, {useState} from 'react';
import './App.css';
import {Button} from './components/Button';
import {InputBlock} from './components/InputBlock';
import {v1} from 'uuid';
import {TasksList} from './components/TasksList';
import {FilterBtnBlock} from './components/FilterBtnBlock';
import {Todolist} from './components/Todolist';

export type TaskType = {
    id: string
    task: string
    isDone: boolean
}
export type FilterType = 'all' | 'active' | 'completed'

function App() {
    const todolistId1 = v1();
    const todolistId2 = v1();

    const [todolists, setTodolists] = useState([
        {id: todolistId1, title: 'Kava', filter: 'all'},
        {id: todolistId2, title: 'Banga', filter: 'all'},
    ])


    const [filter, setFilter] = useState<FilterType>('all')
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), task: '111', isDone: true},
        {id: v1(), task: '222', isDone: false},
        {id: v1(), task: '333', isDone: true},
        {id: v1(), task: '444', isDone: false},
        {id: v1(), task: '555', isDone: false},
    ])
    const removeTask = (taskId: string) => setTasks(tasks.filter(t => t.id !== taskId))
    const addTask = (title: string) => {
        const newTask = {id: v1(), task: title, isDone: false}
        setTasks([newTask, ...tasks])
    }
    const checkboxSwitcher = (id: string, checkboxStatus: boolean) => {
        setTasks(tasks.map(t => t.id === id ? {...t, isDone: checkboxStatus} : t))
    }


    let filteredTasks = tasks
    if (filter === 'completed') filteredTasks = tasks.filter(t => t.isDone)
    if (filter === 'active') filteredTasks = tasks.filter(t => !t.isDone)


    return (
        <div className="App">
            {todolists.map(tdl => {
                return (
                    <Todolist
                        title={tdl.title}
                        removeTask={removeTask}
                        addTask={addTask}
                        checkboxSwitcher={checkboxSwitcher}
                        tasks={filteredTasks}
                        setFilter={setFilter}
                    />
                )
            })}
        </div>
    );
}

export default App;
