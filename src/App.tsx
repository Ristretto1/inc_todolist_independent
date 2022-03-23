import React from 'react';
import './App.css';
import {Button} from './components/Button';

function App() {
    return (
        <div className="App">
            <div>
                <h3>What to learn</h3>
                
                <div>
                    <input/>
                    <Button name={'+'} callback={()=>{}}/>
                </div>

                <ul>
                    <li>
                        <input type="checkbox" checked={true}/>
                        <span>HTML&CSS</span>
                        <Button name={'x'} callback={()=>{}}/>
                    </li>
                </ul>

                <div>
                    <Button name={'All'} callback={()=>{}}/>
                    <Button name={'Active'} callback={()=>{}}/>
                    <Button name={'Completed'} callback={()=>{}}/>
                </div>
            </div>
        </div>
    );
}

export default App;
