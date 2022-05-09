import React from 'react';
import {Button} from './Button';
import {EditableSpan} from './EditableSpan';

type TdlTitleBlockPropsType = {
    title: string
    removeTdl: (tdlId: string) => void
    tdlId: string
    editTdlTitle: (tdlId: string, title: string) => void
}

export const TdlTitleBlock: React.FC<TdlTitleBlockPropsType> = ({tdlId, title, removeTdl, editTdlTitle}) => {

    const onRemoveTdlHandler = () => removeTdl(tdlId)
    const onChangeTdlTitleHandler = (title: string) => editTdlTitle(tdlId, title)

    return (
        <h3>
            <EditableSpan value={title} onChange={onChangeTdlTitleHandler}/>
            <Button name={'X'} callback={onRemoveTdlHandler}/>
        </h3>
    );
};

