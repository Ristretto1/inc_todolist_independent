import React, {useState} from 'react';
import {Button} from "./Button";
import {Input} from "./Input";

export const FullInput = () => {
    const [title, setTitle] = useState<string>('')

    return (
        <div>
            <Input
                title = {title}
                setTitle={setTitle}
            />
            <Button name={'+'} callback={()=>{}}/>
        </div>
    );
};

