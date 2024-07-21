import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import { todoListState } from '../recoil_state';

const AddTodoItem = () => {
    // debugger;
    const [inputValue, setInputValue] = useState('');
    //M-1-using useState
    // const [todos, setTodos] = useState([]);

    //m-2-using Recoil
    const [todoList, setTodoList] = useRecoilState(todoListState);

    const onChangeTodo = (e) => {
        setInputValue(e.target.value)
    };

    const addTodo = () => {
        //M-1-using useState
        // setTodos((todo) => [...todos, inputValue])

        //M-2-using Recoil
        setTodoList((prevTodoList) => [...prevTodoList, {
            id: getId(),
            todo: inputValue,
            isComplete: false
        }]);
        setInputValue('');
    };

    // console.log(todos)
    console.log(todoList)
    return (
        <div>
            <input type="text" value={inputValue} onChange={onChangeTodo}></input>
            <button onClick={addTodo}>Add Todo</button>
        </div>
    );
}

let id = 0;
function getId() {
    return id++;
};

export default AddTodoItem;