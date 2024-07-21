import { useCallback, useState } from "react"
import AddItems from "./additem"
import OperateItem from "./operateItem"

export interface propsTypes {
    items: { id: number, name: string, description?: string }[]
    setItems: (item: { name: string }[] | []) => void
}
const ItemList = () => {

    const [items, setItems] = useState<{ id: number, name: string, description?: string }[] | []>([])

    const setItemsFn = useCallback((items: { id: number, name: string, description?: string }[] | []) => {
        setItems(items)
    }, []);

    return (
        <>
            <AddItems items={items} setItemsFn={setItemsFn} />
            {items?.length > 0 ? <table>
                <tr>
                    <th>item Number</th>
                    <th>item Name</th>
                    <th>description</th>
                    <th>Actions</th>
                </tr>
                {
                    items?.map(item => <OperateItem item={item} items={items} setItemsFn={setItemsFn} />)
                }
            </table> : null}
        </>
    )
};

export default ItemList;