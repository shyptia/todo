import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { TodoPage } from './pages/TodoPage';
import { DeletedTodoPages } from './pages/DeletedTodoPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="deleted" element={<DeletedTodoPages />} />
      </Routes>
    </div>
  );
}

export default App;
