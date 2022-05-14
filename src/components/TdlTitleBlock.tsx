import React from 'react';
import {Button} from './Button';

type TdlTitleBlockPropsType = {
    tdlTitle: string
    removeTdl: () => void
}

export const TdlTitleBlock: React.FC<TdlTitleBlockPropsType> = ({tdlTitle, removeTdl}) => {
    return (
        <h3>
            {tdlTitle}
            <Button name={'X'} callback={removeTdl}/>
        </h3>
    );
};

