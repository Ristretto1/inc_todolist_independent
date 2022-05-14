import React, {ChangeEvent, useState} from 'react';

type EditableSpanPropsType = {
    spanText: string
    editItem: (title: string) => void
}

export const EditableSpan: React.FC<EditableSpanPropsType> = ({spanText, editItem}) => {

    const [title, setTitle] = useState<string>(spanText)
    const [editMode, setEditMode] = useState<boolean>(false)
    const editModeON = () => setEditMode(true)
    const editModeOFF = () => {
        setEditMode(false)
        editItem(title)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

    return (
        editMode
            ? <input value={title} onChange={onChangeHandler} onBlur={editModeOFF} autoFocus/>
            : <span onDoubleClick={editModeON}>{spanText}</span>
    );
};