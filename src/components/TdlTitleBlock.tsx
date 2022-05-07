import React from 'react';
import {Button} from './Button';

type TdlTitleBlockPropsType ={
    title: string
}

export const TdlTitleBlock: React.FC<TdlTitleBlockPropsType> = ({title}) => {
    return (
        <h3>
            {title}
            <Button name={'X'} callback={() => {
            }}/>
        </h3>
    );
};

