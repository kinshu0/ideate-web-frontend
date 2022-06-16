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


function EditableField(props) {

  const [content, setContent] = useState('');
  const [inEdit, setInEdit] = useState(false);

  const handleClick = (e) => {
    setInEdit(true)
  }

  const handleChange = (e) => {
    setContent(e.target.value)
    console.log(content)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setInEdit(false)
  }

  return (
    <div className='editable-field'>
      {
        inEdit
        ? <form onBlur={handleSubmit} onSubmit={handleSubmit}><input autoFocus={true} onSubmit={handleSubmit} onChange={handleChange} value={content} /></form>
        : <h2 style={content === '' ? {color: 'gray'} : {color: 'black'}} onClick={handleClick}>{content === '' ? 'set title...' : content}</h2>
      }
      
    </div>
  )
}



function ListContainer(props) {
  const [title, setTitle] = useState('Shtuff to do')
  const [listItems, setListItems] = useState([
    { id: 1, content: "get groceries", checked: false },
    { id: 2, content: "send email", checked: false },
    { id: 3, content: "pay credit card bill", checked: false },
  ])


  const handleTitleInput = (e) => {
    setTitle(e.target.textContent)
    console.log(title)
  }

  const handleCheck = (key) => {
    setListItems(
      listItems.map(listItem =>
        listItem.id === key
          ? { ...listItem, checked: !listItem.checked }
          : listItem
      )
    )
    console.log(listItems)
  }

  return (
    <div className='list-container'>
      {/* <h2 contentEditable={true} onBlur={handleTitleInput} className='list-title'>{title}</h2> */}
      <EditableField />
      <div className='list-body'>
        {
          listItems.map(
            ({ content, checked, id }) => <ListItem key={id} id={id} content={content} checked={checked} handleCheck={handleCheck} />
          )
        }
      </div>
    </div>
  )
}

function ListItem(props) {

  return (
    <div className='list-item-container'>
      <input className='check-box' type="checkbox" checked={props.checked} onChange={() => props.handleCheck(props.id)} />{props.content}
    </div>
  )
}



export default App;
