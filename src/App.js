import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { API_ENDPOINT } from './api';




function App() {
  const [lists, setLists] = useState([])
  const [currentList, setCurrentList] = useState({})

  useEffect(() => {
    fetch(`${API_ENDPOINT}/lists`)
      .then(async response => {
        await setLists(await response.json())
        setCurrentList(lists[0])
      })
  }, [])

  const changeListInView = listId => {
    setCurrentList(lists.find(({_id}) => _id === listId))
  }

  return (
    <div className="App">
      <ToolbarNav />
      <Sidebar lists={lists} handleClick={changeListInView} />
      <MainBody list={currentList}/>
    </div>
  );
}

function ToolbarNav(props) {
  const username = 'Kinshu'
  return (
    <nav className='toolbar'>
      <a>Kinshu</a>
    </nav>
  )
}


function Sidebar(props) {

  const handleClick = (e) => {
    e.preventDefault()
    props.handleClick(e.target.id)
  }

  return (
    <nav className='sidebar'>
      <ul>
        {props.lists.map(({ title, color, _id }) => <li key={_id} id={_id} style={{background: color}}><a onClick={handleClick} href=''>{title}</a></li>)}
      </ul>
    </nav>
  )
}


function MainBody(props) {
  return (
    <div className='main-body'>
      <ListContainer list={props.list} />
    </div>
  )
}


function EditableH2(props) {
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


function EditableP(props) {
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


function ListContainer(props) {
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
  )
}


function ListItem(props) {
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



export default App;
