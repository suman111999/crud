import { Avatar, Grid, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { filteredTodoListState, todoListState } from '../recoil_state';
import AddTodoItem from './AddTodoItem';
import ProfileImageChanger from './Profile';
import TodoItem from './TodoItem';
import TodoListDetails from './TodoListDetails';
import TodoListFilter from './TodoListFilter';


const TodoList = () => {
    // const todoList = useRecoilValue(todoListState);

    const todoList = useRecoilValue(filteredTodoListState);

    const x = (e) => {
        console.log(e.target.src)
    }
    return (
        <Grid container spacing={8}>
            <Grid item sm={6} xs={12}>
                <AddTodoItem />
                {/* for filtering */}
                <TodoListFilter />
                <TodoListDetails />
                {todoList.map((todo, index) => {
                    return < TodoItem key={index + todo.id} todoItem={todo} />
                }
                )}
            </Grid>

            <Grid item sm={6} xs={12}>
                {/* <button onClick={x}>
                    <Avatar alt="Remy Sharp" src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" />
                </button> */}
                <ProfileImageChanger />

            </Grid>

        </Grid>
    );
};

export default TodoList;