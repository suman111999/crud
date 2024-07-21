import React, { useState } from 'react'

const OperateItem = ({ item, items, setItemsFn }: { item: { id: number, name: string, description?: string }, items: { id: number, name: string, description?: string }[], setItemsFn: (items: { id: number, name: string, description?: string }[]) => void }) => {

    const { id, name, description } = item;

    const [edit, setEdit] = useState(false)
    const indexToModify = items.findIndex(it => it.id === id);

    const updateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const modified = [...items.slice(0, indexToModify), { ...item, name: e.target.value }, ...items.slice(indexToModify + 1)]
        setItemsFn(modified)
    }

    const onDelete = () => {
        const modified = [...items.slice(0, indexToModify), ...items.slice(indexToModify + 1)]
        setItemsFn(modified)
    }
    return (
        <tr key={id}>
            <td>{id}</td>
            <td>{edit ? <input name='name' value={name} onChange={updateChangeHandler} /> : name}</td>
            <td>{description}</td>
            <td>
                {edit ? <button onClick={() => { setEdit(false) }}>update</button> :
                    <button onClick={() => { setEdit(true) }}>Edit</button>}
                <button onClick={onDelete}>Delete</button>
            </td>
        </tr>
    )
}

export default OperateItem