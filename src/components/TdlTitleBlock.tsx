import React from 'react';
import {Button} from './Button';

type TdlTitleBlockPropsType = {
    title: string
    removeTdl: (tdlId: string) => void
    tdlId: string
}

export const TdlTitleBlock: React.FC<TdlTitleBlockPropsType> = ({tdlId, title, removeTdl}) => {

    const onRemoveTdlHandler = () => removeTdl(tdlId)

    return (
        <h3>
            {title}
            <Button name={'X'} callback={onRemoveTdlHandler}/>
        </h3>
    );
};

