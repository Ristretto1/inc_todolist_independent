import React, {useState} from 'react';
import './App.css';
import {v1} from 'uuid';
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


    const [tasks, setTasks] = useState({
        [todolistId1]: [
            {id: v1(), task: '111', isDone: true},
            {id: v1(), task: '222', isDone: false},
            {id: v1(), task: '333', isDone: true},
            {id: v1(), task: '444', isDone: false},
            {id: v1(), task: '555', isDone: false},
        ],
        [todolistId2]: [
            {id: v1(), task: '111', isDone: true},
            {id: v1(), task: '222', isDone: false},
            {id: v1(), task: '333', isDone: true},
            {id: v1(), task: '444', isDone: false},
            {id: v1(), task: '555', isDone: false},
        ],
    })
    const removeTask = (todolistId: string, taskId: string) => {
        setTasks({...tasks, [todolistId]: tasks[todolistId].filter(t => t.id !== taskId)})
    }
    const addTask = (todolistId: string, title: string) => {
        const newTask = {id: v1(), task: title, isDone: false}
        setTasks({...tasks, [todolistId]: [newTask, ...tasks[todolistId]]})
    }
    const checkboxSwitcher = (todolistId: string, id: string, checkboxStatus: boolean) => {
        setTasks({...tasks, [todolistId]: tasks[todolistId].map(t => t.id === id ? {...t, isDone: checkboxStatus} : t)})
    }
    const setFilter = (todolistId: string, filter: FilterType) => {
        setTodolists(todolists.map(tdl => tdl.id === todolistId ? {...tdl, filter} : tdl))
    }
    const removeTDL = (todolistId: string,) => {
        setTodolists(todolists.filter(tdl => tdl.id !== todolistId))
        delete tasks[todolistId]
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
                        title={tdl.title}
                        removeTask={removeTask}
                        addTask={addTask}
                        checkboxSwitcher={checkboxSwitcher}
                        tasks={filteredTasks}
                        setFilter={setFilter}
                        todolistId={tdl.id}
                        removeTDL={removeTDL}
                    />
                )
            })}
        </div>
    );
}

export default App;
