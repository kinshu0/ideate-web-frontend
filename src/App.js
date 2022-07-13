// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { API_ENDPOINT } from './api';
import Sidebar from './features/Sidebar';
import ToolbarNav from './components/ToolbarNav';
import { loadLists } from './features/allListsSlice';
import { useDispatch } from 'react-redux';
import { MainBody } from './features/AllLists';


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadLists())
  }, [dispatch])
  

  return (
    <div className="App">
      <ToolbarNav />
      <Sidebar />
      <MainBody />
    </div>
  );
}


export default App;
