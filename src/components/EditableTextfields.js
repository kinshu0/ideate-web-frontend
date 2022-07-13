import { useState } from "react";


export function EditableH2(props) {
    const [inEdit, setInEdit] = useState(false);

    const handleClick = (e) => {
        setInEdit(true)
    }

    const handleChange = (e) => {
        props.handleChange(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setInEdit(false)
    }

    return (
        <div className='editable-h2'>
            {
                inEdit
                    ? <form onBlur={handleSubmit} onSubmit={handleSubmit}><input autoFocus={true} onSubmit={handleSubmit} onChange={handleChange} value={props.text} /></form>
                    : <h2 style={props.text === '' ? { color: 'gray' } : { color: 'black' }} onClick={handleClick}>{props.text === '' ? 'set title...' : props.text}</h2>
            }
        </div>
    )
}


export function EditableP(props) {
    const [inEdit, setInEdit] = useState(false);

    const handleClick = (e) => {
        setInEdit(true)
    }

    const handleChange = (e) => {
        props.handleChange(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setInEdit(false)
    }

    return (
        <div className='editable-p'>
            {
                inEdit
                    ? <form onBlur={handleSubmit} onSubmit={handleSubmit}><input autoFocus={true} onSubmit={handleSubmit} onChange={handleChange} value={props.text} /></form>
                    : <p style={props.text === '' ? { color: 'gray' } : { color: 'black' }} onClick={handleClick}>{props.text === '' ? 'set title...' : props.text}</p>
            }

        </div>
    )
}
