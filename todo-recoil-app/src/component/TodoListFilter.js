import React from 'react'
import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../recoil_state';

const TodoListFilter = () => {
    const [filter, setFilter] = useRecoilState(todoListFilterState);

    const onChangeFilter = (e) => {
        setFilter(e.target.value)
    };

    return (
        <div>
            <select value={filter} onChange={onChangeFilter}>
                <option value='All'>All</option>
                <option value='Completed'>Completed</option>
                <option value='UnCompleted'>UnCompleted</option>
            </select>
        </div>
    )
};

export default TodoListFilter;