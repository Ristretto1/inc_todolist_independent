import React, {useState} from 'react';
import './App.css';
import {Button} from './components/Button';
import {v1} from 'uuid';
import {TasksList} from './components/TasksList';

export type TaskType = {
    id: string
    task: string
    isDone: boolean
}

function App() {

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), task: '1', isDone: false},
        {id: v1(), task: '2', isDone: false},
        {id: v1(), task: '3', isDone: true},
        {id: v1(), task: '4', isDone: true},
    ])

    const removeTask = (id: string) => setTasks(tasks.filter(t => t.id !== id))
    const CheckboxSwitch = (id: string, done: boolean) => {
        setTasks(tasks.map(t => t.id === id ? {...t, isDone: done} : t))
    }

    return (
        <div className="App">
            <div>
                <h3>What to learn</h3>
                <div>
                    <input/>
                    <Button name={'+'} callback={() => {
                    }}/>
                </div>

                <TasksList tasks={tasks} removeTask={removeTask} CheckboxSwitch={CheckboxSwitch}/>

                <div>
                    <Button name={'All'} callback={() => {
                    }}/>
                    <Button name={'Active'} callback={() => {
                    }}/>
                    <Button name={'Completed'} callback={() => {
                    }}/>
                </div>
            </div>
        </div>
    );
}

export default App;
