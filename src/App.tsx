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

export type FilterType = 'all' | 'active' | 'completed'

function App() {
    const [filter, setFilter] = useState<FilterType>('all')
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), task: '0101', isDone: false},
        {id: v1(), task: '0202', isDone: false},
        {id: v1(), task: '0303', isDone: true},
        {id: v1(), task: '0404', isDone: true},
        {id: v1(), task: '0505', isDone: true},
    ])

    let filteredTasks = tasks
    if (filter === 'completed') filteredTasks = tasks.filter(t => t.isDone)
    if (filter === 'active') filteredTasks = tasks.filter(t => !t.isDone)

    const removeTask = (taskId: string) => {
        setTasks(tasks.filter(t => t.id !== taskId))
    }
    const switchCheckboxStatus = (status: boolean, taskId: string) => {
        setTasks(tasks.map(t => t.id === taskId ? {...t, isDone: status} : t))
    }

    return (
        <div className="App">
            <Todolist
                title={'yo'}
                tasks={filteredTasks}
                setFilter={setFilter}
                filter={filter}
                removeTask={removeTask}
                switchCheckboxStatus={switchCheckboxStatus}
            />
        </div>
    );
}

export default App;
