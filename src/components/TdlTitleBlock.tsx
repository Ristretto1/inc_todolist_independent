import React from 'react';
import {Button} from './Button';
import {EditableSpan} from './EditableSpan';

type TdlTitleBlockPropsType = {
    tdlTitle: string
    removeTdl: () => void
    editTdl: (title: string) => void
}

export const TdlTitleBlock: React.FC<TdlTitleBlockPropsType> = ({tdlTitle, removeTdl, editTdl}) => {
    return (
        <h3>
            <EditableSpan spanText={tdlTitle} editItem={editTdl}/>
            <Button name={'X'} callback={removeTdl}/>
        </h3>
    );
};

