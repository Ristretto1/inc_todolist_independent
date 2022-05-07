import React, {useState} from 'react';
import './App.css';
import {Button} from './components/Button';
import {FilterBtnBlock} from './components/FilterBtnBlock';
import {TasksList} from './components/TasksList';
import {InputBlock} from './components/InputBlock';
import {TdlTitleBlock} from './components/TdlTitleBlock';
import {v1} from 'uuid';
import {Todolist} from './components/Todolist';

export type TaskType = {
    id: string,
    task: string,
    isDone: boolean
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

    return (
        <div className="App">
            <Todolist
                tasks={tasks}
            />
        </div>
    );
}

export default App;
