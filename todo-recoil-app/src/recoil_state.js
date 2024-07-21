import { atom, selector } from 'recoil';

const todoListState = atom({
    key: 'TodoListState',
    default: []
});

const todoListFilterState = atom({
    key: 'TodoListFilterState',
    default: 'All'
});

const filteredTodoListState = selector({
    key: 'FilteredTodoListState',
    get: ({ get }) => {
        const filterState = get(todoListFilterState);
        const todoList = get(todoListState);

        switch (filterState) {
            case 'Completed':
                return todoList.filter((todo) => todo.isComplete);
            case 'UnCompleted':
                return todoList.filter((todo) => !todo.isComplete);
            default:
                return todoList;
        };
    }
});

const todoListDetails = selector(({
    key: 'TodoListDetails',
    get: ({ get }) => {
        const todoList = get(todoListState)
        const totalTodo = todoList.length;
        const totalCompletedTodo = todoList.filter((todo) => todo.isComplete).length;
        const totalUncompletedTodo = todoList.filter((todo) => !todo.isComplete).length;

        const todoCompletedPercenatge = totalTodo === 0 ? 0 : (totalCompletedTodo / totalTodo) * 100;

        return {
            totalTodo,
            totalCompletedTodo,
            totalUncompletedTodo,
            todoCompletedPercenatge
        };
    }
}));

export { todoListState, todoListFilterState, filteredTodoListState, todoListDetails };