import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <ToolbarNav />
      <Sidebar />
      <MainBody />
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


function Sidebar() {
  return (
    <nav className='sidebar'>
      <ul>
        <li><a href='nothinghere'>some link</a></li>
        <li><a href='nothinghere'>some other link</a></li>
        <li><a href='nothinghere'>yet another link</a></li>
        <li><a href='nothinghere'>get out</a></li>
      </ul>
    </nav>
  )
}


function MainBody(props) {
  return (
    <div className='main-body'>
      <ListContainer />
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
        : <h2 style={props.text === '' ? {color: 'gray'} : {color: 'black'}} onClick={handleClick}>{props.text === '' ? 'set title...' : props.text}</h2>
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
        : <p style={props.text === '' ? {color: 'gray'} : {color: 'black'}} onClick={handleClick}>{props.text === '' ? 'set title...' : props.text}</p>
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
