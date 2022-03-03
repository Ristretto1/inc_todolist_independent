import React from 'react';

type TodoListTitlePropsType = {
    title: string,
}

const TodoListTitle = (props: TodoListTitlePropsType) => {
    return (
        <h3>{props.title}</h3>
    );
};

export default TodoListTitle;