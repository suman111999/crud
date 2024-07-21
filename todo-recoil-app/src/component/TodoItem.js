import React from 'react'
import { useRecoilState } from 'recoil';
import { todoListState } from '../recoil_state';

const TodoItem = (props) => {
    const { todoItem } = props;
    const [todoList, setTodoList] = useRecoilState(todoListState);

    const indexOfTodoItem = todoList.findIndex((todo) => todo === todoItem);

    const editTodoItem = (e) => {
        const updatedList = [...todoList.slice(0, indexOfTodoItem), { ...todoItem, todo: e.target.value }, ...todoList.slice(indexOfTodoItem + 1)]

        // const updatedList = updateTodoItem(todoList, indexOfTodoItem, { ...todoItem, todo: e.target.value });
        setTodoList(updatedList);
    };

    const toggleTodoCompleted = () => {
        const toggledTodoList = [...todoList.slice(0, indexOfTodoItem), { ...todoItem, isComplete: !todoItem.isComplete }, ...todoList.slice(indexOfTodoItem + 1)];
        setTodoList(toggledTodoList);
    };

    const deleteItem = () => {
        const todoListAfterDelete = [...todoList.slice(0, indexOfTodoItem), ...todoList.slice(indexOfTodoItem + 1)];
        setTodoList(todoListAfterDelete)
    };

    return (
        <>
            <input type='text' value={todoItem.todo} onChange={editTodoItem} />
            <input type='checkbox' checked={todoItem.isComplete} onChange={toggleTodoCompleted} />
            <button onClick={deleteItem}>Delete</button>
        </>
    );
}

//better approach
function updateTodoItem(array, index, updatedTodo) {
    return [...array.slice(0, index), updateTodoItem, ...array.slice(index + 1)];
};

function deleteTodoItem(array, index) {
    return [...array.slice(0, index), ...array.slice(index + 1)];
}

export default TodoItem;