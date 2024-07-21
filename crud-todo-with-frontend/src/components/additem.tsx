import React, { useState } from 'react'
import { propsTypes } from './itemList'

const AddItems = ({ items, setItemsFn }: Omit<propsTypes, 'setItems'> & { setItemsFn: (items: { id: number, name: string, description?: string }[]) => void }) => {
    const [input, setInput] = useState({ name: '' })
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({ name: e.target.value })
    }

    const onSaveHandler = () => {
        setItemsFn([...items, { id: getId(), ...input }])
        setInput({ name: '' })
    }
    return (
        <div>
            <input name='name' onChange={onChangeHandler} value={input?.name} />
            <button onClick={onSaveHandler}>Save</button>
        </div>
    )
}

let id = 0;
function getId() {
    return id++;
}
export default AddItems