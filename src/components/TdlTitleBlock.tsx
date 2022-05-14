import React from 'react';
import {Button} from './Button';

type TdlTitleBlockPropsType = {
    tdlTitle: string
}

export const TdlTitleBlock: React.FC<TdlTitleBlockPropsType> = ({tdlTitle}) => {
    return (
        <h3>
            {tdlTitle}
            <Button name={'X'} callback={() => {
            }}/>
        </h3>
    );
};

