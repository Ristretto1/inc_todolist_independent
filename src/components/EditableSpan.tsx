import React, {ChangeEvent, useState} from 'react';

type EditableSpanPropsType = {
    value: string
    onChange: (title: string) => void
}

export const EditableSpan: React.FC<EditableSpanPropsType> = ({value, onChange}) => {

    const [title, setTitle] = useState<string>('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>)=> setTitle(e.currentTarget.value)

    const [editMode, setEditMode] = useState<boolean>(false)
    const activateEditMode = () => {
        setEditMode(true)
        setTitle(value)
    }
    const activateViewMode = () => {
        setEditMode(false)
        onChange(title)
    }

    return editMode
            ? <input value={title} onChange={onChangeHandler} onBlur={activateViewMode} autoFocus/>
            : <span onDoubleClick={activateEditMode}>{value}</span>

    ;
};

