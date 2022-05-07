import React from 'react';
import './App.css';
import {Button} from './components/Button';
import {FilterBtnBlock} from './components/FilterBtnBlock';
import {TasksList} from './components/TasksList';
import {InputBlock} from './components/InputBlock';
import {TdlTitleBlock} from './components/TdlTitleBlock';

function App() {
    return (
        <div className="App">
            <div>
                <TdlTitleBlock/>
                <InputBlock/>
                <TasksList/>
                <FilterBtnBlock/>
            </div>
        </div>
    );
}

export default App;
