import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListDetails } from '../recoil_state';

const TodoListDetails = () => {
    const { totalTodo,
        totalCompletedTodo,
        totalUncompletedTodo,
        todoCompletedPercenatge } = useRecoilValue(todoListDetails);

    console.log('x', totalTodo,
        totalCompletedTodo,
        totalUncompletedTodo,
        todoCompletedPercenatge)
    // const { totalTodo, totalCompletedTodo, totalUncompletedTodo, todoCompletedPercenatge } = todoStats;
    return (
        <ul>
            {/* <li>Todos:{totalTodo}</li>
            <li>Completed Todo:{totalCompletedTodo}</li>
            <li>Not Completed Todo:{totalUncompletedTodo}</li>
            <li>Percent Todo Completed:{todoCompletedPercenatge}</li> */}
        </ul>
    )
};

export default TodoListDetails