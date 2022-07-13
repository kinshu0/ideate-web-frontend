import { EditableP } from "./EditableTextfields"

export function ListItem(props) {
    const { checked, content } = props.item

    const handleCheck = () => {
        props.handleItemChange(props.id, {
            ...props.item,
            checked: !checked,
        })
    }

    const handleTextChange = newText => {
        props.handleItemChange(props.id, {
            ...props.item,
            content: newText,
        })
    }

    return (
        <div className='list-item-container'>
            <input className='check-box' type="checkbox" checked={checked} onChange={handleCheck} />
            <EditableP text={content} handleChange={handleTextChange} />
        </div>
    )
}