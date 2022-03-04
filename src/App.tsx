import React, {useState} from 'react';
import './App.css';
import TodoList, {TasksType} from "./components/TodoList";

function App() {

    const todoListTitle_1: string = 'What to learn';

    let InitTasks: Array<TasksType> = [
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ];

    let [tasks, setTasks] = useState(InitTasks);


    const removeTask = (id: number) => {
        let filteredTasks = tasks.filter((t) => t.id !== id)
        setTasks(filteredTasks)
    }

    return (
        <div className="App">
            <TodoList title={todoListTitle_1}
                      tasks={tasks}
                      removeTask={removeTask}
            />

        </div>
    );
}

export default App;
