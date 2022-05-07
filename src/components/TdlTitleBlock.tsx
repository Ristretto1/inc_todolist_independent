import React from 'react';
import {Button} from './Button';

type TdlTitleBlockPropsType ={

}

export const TdlTitleBlock: React.FC<TdlTitleBlockPropsType> = ({}) => {
    return (
        <h3>
            What to learn
            <Button name={'X'} callback={() => {
            }}/>
        </h3>
    );
};

