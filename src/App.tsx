import React, {useState} from 'react';
import './App.css';
import {Todolist} from './components/Todolist';
import {v1} from 'uuid';
import {FullInput} from './components/FullInput';
import set = Reflect.set;

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type FilterType = 'all' | 'active' | 'completed'
export type TodolistType = {
    id: string
    title: string
    filter: FilterType
}
export type StateType = {
    [key: string]: Array<TaskType>
}

function App() {

    const todolistsId1 = v1()
    const todolistsId2 = v1()

    const [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistsId1, title: 'Qwerty', filter: 'all'},
        {id: todolistsId2, title: 'Asdfg', filter: 'all'},
    ])

    const [tasks, setTasks] = useState<StateType>({
        [todolistsId1]: [
            {id: v1(), title: '1', isDone: false},
            {id: v1(), title: '2', isDone: true},
            {id: v1(), title: '3', isDone: true},
            {id: v1(), title: '4', isDone: false},
            {id: v1(), title: '5', isDone: false},
        ],
        [todolistsId2]: [
            {id: v1(), title: '11', isDone: false},
            {id: v1(), title: '22', isDone: true},
            {id: v1(), title: '33', isDone: true},
            {id: v1(), title: '44', isDone: false},
            {id: v1(), title: '55', isDone: false},
        ],
    })

    const removeTdl = (tdlId: string) => {
        setTodolists(todolists.filter(tdl => tdl.id !== tdlId))
        delete tasks[tdlId]
    }
    const addTdl = (title: string) => {
        const newTdlId = v1()
        const newTdl: TodolistType = {id: newTdlId, title: title, filter: 'all'}
        setTodolists([newTdl, ...todolists])
        setTasks({...tasks, [newTdlId]:[]})
    }

    const removeTask = (tdlId: string, taskId: string) => {
        setTasks({...tasks, [tdlId]: tasks[tdlId].filter(t=> t.id !== taskId)})
    }

    const addTask = (tdlId: string, title: string) => {
        const newTask = {id: v1(), title: title, isDone: false}
        setTasks({...tasks, [tdlId]: [newTask, ...tasks[tdlId]]})
    }

    const switchFilter = (tdlId: string, value: FilterType) => {
        setTodolists(todolists.map(tdl => tdl.id === tdlId ? {...tdl, filter: value} : tdl))
    }

    const switchCheckbox = (tdlId: string, taskId: string, status: boolean) => {
        setTasks({...tasks, [tdlId]: tasks[tdlId].map(t => t.id === taskId ? {...t, isDone: status} : t)})
    }

    return (
        <div className="App">
            <FullInput addItem={addTdl}/>
            {todolists.map(tdl => {
                let filteredTask = tasks[tdl.id]
                if (tdl.filter === 'completed') filteredTask = tasks[tdl.id].filter(t => t.isDone)
                if (tdl.filter === 'active') filteredTask = tasks[tdl.id].filter(t => !t.isDone)

                return (
                    <Todolist
                        key={tdl.id}
                        tdlId={tdl.id}
                        tdlTitle={tdl.title}
                        tasks={filteredTask}
                        removeTask={removeTask}
                        addTask={addTask}
                        switchFilter={switchFilter}
                        switchCheckbox={switchCheckbox}
                        removeTdl={removeTdl}
                    />
                )
            })}
        </div>
    );
}

export default App;
