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

export type TaskStateType = {
    [key: string]: Array<TaskType>
}

function App() {

​    let todolistID1 = v1()
    let todolistID2 = v1()

    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<TaskStateType>({
        [todolistID1]: [
            {id: v1(), task: 'HTML&CSS', isDone: true},
            {id: v1(), task: 'JS', isDone: true},
            {id: v1(), task: 'ReactJS', isDone: false},

        ],
        [todolistID2]: [
            {id: v1(), task: 'Rest API', isDone: true},
            {id: v1(), task: 'GraphQL', isDone: false},
        ]
    })


    const filterSwitcher = (tdlId: string, value: FilterType) => setTodolists(todolists.map(tdl => tdl.id === tdlId ? {...tdl, filter: value} : tdl))

    const removeTask = (tdlId: string, taskId: string) => setTasks({...tasks, [tdlId]: tasks[tdlId].filter(t => t.id !== taskId)})

    const addTask = (title: string) => {
        // const newTask = {id: v1(), task: title, isDone: false}
        // setTasks([newTask, ...tasks])
    }

    const checkboxStatusSwitcher = (id: string, status: boolean) => {
        // setTasks(tasks.map(t => t.id === id ? {...t, isDone: status} : t))
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
