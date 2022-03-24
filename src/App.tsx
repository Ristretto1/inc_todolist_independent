import React, {useState} from 'react';
import './App.css';
import {Button} from './components/Button';
import {v1} from 'uuid';
import {TasksList} from './components/TasksList';
import {TodoList} from './components/TodoList';

export type TaskType = {
    id: string
    task: string
    isDone: boolean
}
export type FilterType = 'all' | 'active' | 'completed'

export type TodolistType = {
    id: string
    title: string
    filter: FilterType
}

function App() {
    const removeTask = (id: string, todolistId: string) => {
        const tasks = tasksOdj[todolistId]
        const filteredTasks = tasks.filter(t => t.id !== id)
        tasksOdj[todolistId] = filteredTasks
        setTasks({...tasksOdj})
    }
    const checkboxSwitch = (id: string, done: boolean, todolistId: string) => {
        const tasks = tasksOdj[todolistId]
        const mappedTasks = tasks.map(t => t.id === id ? {...t, isDone: done} : t)
        tasksOdj[todolistId] = mappedTasks
        setTasks({...tasksOdj})
    }
    const addTask = (title: string, todolistId: string) => {
        const tasks = tasksOdj[todolistId]
        const task = {id: v1(), task: title, isDone: false}
        const newTasks = [task, ...tasks]
        tasksOdj[todolistId] = newTasks
        setTasks({...tasksOdj})
    }

    const changeFilter = (filter: FilterType, todolistId: string) => {
        const todolist = todolists.find(tl => tl.id === todolistId)
        if (todolist) {
            todolist.filter = filter
            setTodolists([...todolists])
        }
    }

    const removeTodolist = (TLId: string) => {
        setTodolists(todolists.filter(tl => tl.id !== TLId))
        delete tasksOdj[TLId]
        setTasks({...tasksOdj})
    }

    const todolist1 = v1()
    const todolist2 = v1()

    const [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolist1, title: 'What to learn', filter: 'all'},
        {id: todolist2, title: 'What to buy', filter: 'all'},
    ])

    const [tasksOdj, setTasks] = useState({
        [todolist1]: [
            {id: v1(), task: '1', isDone: false},
            {id: v1(), task: '2', isDone: false},
            {id: v1(), task: '3', isDone: true},
            {id: v1(), task: '4', isDone: true},
        ],
        [todolist2]: [
            {id: v1(), task: '5', isDone: false},
            {id: v1(), task: '6', isDone: true},
            {id: v1(), task: '7', isDone: false},
            {id: v1(), task: '8', isDone: true},
        ],
    })

    return (
        <div className="App">
            {todolists.map(tl => {
                let filteredTask = tasksOdj[tl.id]
                if (tl.filter === 'completed') filteredTask = tasksOdj[tl.id].filter(t => t.isDone)
                if (tl.filter === 'active') filteredTask = tasksOdj[tl.id].filter(t => !t.isDone)

                return (
                    <TodoList key={tl.id}
                              TLid={tl.id}
                              title={tl.title}
                              addTask={addTask}
                              tasks={filteredTask}
                              removeTask={removeTask}
                              checkboxSwitch={checkboxSwitch}
                              changeFilter={changeFilter}
                              filter={tl.filter}
                              removeTodolist={removeTodolist}
                    />
                )
            })}

        </div>
    );
}

export default App;
