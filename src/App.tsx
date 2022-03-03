import React from 'react';
import './App.css';
import TodoList, {TasksType} from "./components/TodoList";

function App() {

    const todoListTitle_1: string = 'What to learn';
    const todoListTitle_2: string = 'Movies';

    let tasks1: Array<TasksType> = [
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ]
    let tasks2: Array<TasksType> = [
        {id: 1, title: "Terminator", isDone: true},
        {id: 2, title: "XXX", isDone: false},
        {id: 3, title: "YYY", isDone: false},
    ]

    return (
        <div className="App">
            <TodoList title={todoListTitle_1} tasks={tasks1}/>
            <TodoList title={todoListTitle_2} tasks={tasks2}/>
        </div>
    );
}

export default App;
