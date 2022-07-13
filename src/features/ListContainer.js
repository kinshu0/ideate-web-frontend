import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { EditableH2 } from "../components/EditableTextfields"
import { ListItem } from "../components/ListItem"
import { selectCurrentList } from "./currentListSlice"

export default function ListContainer(props) {
    const dispatch = useDispatch()
    const currentList = useSelector(selectCurrentList)
    const status = useSelector(state => state.allLists.status)



    const [title, setTitle] = useState('Shtuff to do')
    const [listItems, setListItems] = useState({
        1: { content: "get groceries", checked: false },
        2: { content: "send email", checked: false },
        3: { content: "pay credit card bill", checked: false },
    })

    const handleItemChange = (id, updatedItem) => {
        setListItems(prevItem => {
            return {
                ...prevItem,
                [id]: updatedItem
            }
        })
        console.log(listItems)
    }

    const handleTitleChange = (newTitle) => {
        setTitle(newTitle)
    }

    const addItem = () => {

    }

    return (
        <div className='list-container'>
            <EditableH2 text={title} handleChange={handleTitleChange} />
            <div className='list-body'>
                {
                    Object.keys(listItems).map(id => {
                        return <ListItem key={id} id={id} item={listItems[id]} handleItemChange={handleItemChange} />
                    })
                }
            </div>
            <button>Add Item</button>
        </div>
        // <div className='list-container'>
        //     <EditableH2 text={title} handleChange={handleTitleChange} />
        //     <div className='list-body'>
        //         {
        //             Object.keys(listItems).map(id => {
        //                 return <ListItem key={id} id={id} item={listItems[id]} handleItemChange={handleItemChange} />
        //             })
        //         }
        //     </div>
        //     <button>Add Item</button>
        // </div>
    )
}

