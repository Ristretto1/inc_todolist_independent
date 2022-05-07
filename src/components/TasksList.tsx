import React from 'react';
import {Button} from './Button';

type TasksListPropsType = {

}

export const TasksList: React.FC<TasksListPropsType> = ({}) => {
    return (
        <ul>
            <li>
                <input type="checkbox" checked={true}/>
                <span>HTML&CSS</span>
                <Button name={'X'} callback={() => {
                }}/>
            </li>
        </ul>
    );
};

