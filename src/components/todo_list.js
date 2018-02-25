import React, { Component } from 'react';
import TodoItem from './todo_item';

const ToDoList = (props) => {
    if (!props.toDoItems) return <div>dsds</div>;
    const handleDelete = props.handleDelete;
    const handleEdit = props.handleEdit;
    const toggleStatus = props.toggleStatus;
    return (
        props.toDoItems.map((item) => {
            return <TodoItem
                item={item}
                key={item.id}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                toggleStatus={toggleStatus}
                done={props.done}
            />
        }));
};

export default ToDoList;