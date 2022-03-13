import React, {useState} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import {v1} from 'uuid';

export type FilterType = 'All' | 'Active' | 'Completed'
export type TasksType = {
    id: string,
    title: string,
    isDone: boolean
}


function App() {

    const todoListTitle_1: string = 'What to learn';

    let InitTasks: Array<TasksType> = [
        {id: v1(), title: 'CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
    ];
    {/* отслеживаем данные */
    }
    let [tasks, setTasks] = useState<Array<TasksType>>(InitTasks);
    {/* отслеживаем изменение виртуального фильтра */
    }
    let [filter, setFilter] = useState<FilterType>('All');

    {/* Условия изменения виртуального фильтра */
    }
    if (filter === 'Active') tasks = tasks.filter((t) => t.isDone === false);
    if (filter === 'Completed') tasks = tasks.filter((t) => t.isDone === true);

    {/* Функция для кнопки, для изменения значения виртуального фильтра */
    }
    const filteredTask = (title: FilterType) => {
        setFilter(title)
    }

    const removeTask = (id: string) => {
        let filteredTasks = tasks.filter((t) => t.id !== id)
        setTasks(filteredTasks)
    }

    const addTask = (title: string) => {
        let newTask = {id: v1(), title: title, isDone: false}
        setTasks([newTask, ...tasks])
    }

    return (
        <div className="App">
            <TodoList title={todoListTitle_1}
                      tasks={tasks}
                      removeTask={removeTask}
                      filteredTask={filteredTask}
                      addTask={addTask}
            />

        </div>
    );
}

export default App;
