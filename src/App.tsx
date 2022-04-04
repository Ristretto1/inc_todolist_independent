import React from 'react';
import './App.css';
import {InputBlock} from './components/InputBlock';
import {Button} from './components/Button';

function App() {

    

    return (
        <div className="App">
            <div>
                <h3>
                    What to learn
                    <Button name={'X'} callback={()=>{}}/>
                </h3>
                <InputBlock/>
                <ul>
                    <li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>
                    <li><input type="checkbox" checked={true}/> <span>JS</span></li>
                    <li><input type="checkbox" checked={false}/> <span>React</span></li>
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    );
}

export default App;
