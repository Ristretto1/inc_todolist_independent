import React, {useState} from 'react';
import './App.css';
import {InputBlock} from './components/InputBlock';
import {Button} from './components/Button';
import {v1} from 'uuid';
import {Todolist} from './components/Todolist';

export type TaskType = {
    id: string
    task: string
    isDone: boolean
}
export type TodolistPropsType = {
    id: string
    title: string
    filter: FilterType
}


export type FilterType = 'all' | 'active' | 'completed'

function App() {

    const todolistId1 = v1()
    const todolistId2 = v1()

    const [todolists, setTodolists] = useState<Array<TodolistPropsType>>([
        {id: todolistId1, title: 'yoyo', filter: 'all'},
        {id: todolistId2, title: 'yoyoyo', filter: 'all'},
    ])

    const [tasks, setTasks] = useState({
        [todolistId1]: [
            {id: v1(), task: '0101', isDone: false},
            {id: v1(), task: '0202', isDone: false},
            {id: v1(), task: '0303', isDone: true},
            {id: v1(), task: '0404', isDone: true},
            {id: v1(), task: '0505', isDone: true},
        ],
        [todolistId2]: [
            {id: v1(), task: '0101', isDone: false},
            {id: v1(), task: '0202', isDone: false},
            {id: v1(), task: '0303', isDone: true},
            {id: v1(), task: '0404', isDone: true},
            {id: v1(), task: '0505', isDone: true},
        ],
    })


    const removeTask = (todolistId: string, taskId: string) => {
        setTasks({...tasks, [todolistId]: tasks[todolistId].filter(t => t.id !== taskId)})
        // setTasks(tasks.filter(t => t.id !== taskId))
    }
    const switchCheckboxStatus = (status: boolean, taskId: string) => {
        // setTasks(tasks.map(t => t.id === taskId ? {...t, isDone: status} : t))
    }

    const addTask = (todolistId: string, title: string) => {
        const newTask = {id: v1(), task: title, isDone: false}
        setTasks({...tasks, [todolistId]: [newTask, ...tasks[todolistId]]})
        // setTasks([newTask, ...tasks])
    }

    const setFilter = (todolistId: string, filter: FilterType) => {
        setTodolists(todolists.map(tdl => tdl.id === todolistId ? {...tdl, filter} : tdl))
    }

    return (
        <div className="App">
            {todolists.map(tdl => {

                let filteredTasks = tasks[tdl.id]
                if (tdl.filter === 'completed') filteredTasks = tasks[tdl.id].filter(t => t.isDone)
                if (tdl.filter === 'active') filteredTasks = tasks[tdl.id].filter(t => !t.isDone)

                return (
                    <Todolist
                        key={tdl.id}
                        todolistId={tdl.id}
                        title={tdl.title}
                        tasks={filteredTasks}
                        setFilter={setFilter}
                        filter={tdl.filter}
                        removeTask={removeTask}
                        switchCheckboxStatus={switchCheckboxStatus}
                        addTask={addTask}
                    />
                )
            })}
        </div>
    );
}

export default App;
