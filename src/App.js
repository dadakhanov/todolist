import React from 'react';
import './App.css';
import AddTodoContainer from './components/AddTodo/AddTodoContainer';
import TodoListContainer from './components/TodoList/TodoListContainer';
import NavbarFilters from './components/NavbarFilters/NavbarFilters';
import { Route } from 'react-router-dom'
import { visibilityFilters } from './visibilitiFilters';

function App() {
  return (
    <div className="App">
      <div>        
        <NavbarFilters />        
      </div>
      <div>        
        <AddTodoContainer />
        <Route exact path={["/active","/"]}  render={()=><TodoListContainer filter={visibilityFilters.SHOW_ACTIVE}/>} />
        <Route path="/completed" render={()=><TodoListContainer filter={visibilityFilters.SHOW_COMPLETED}/>} />
        <Route path="/all" render={()=><TodoListContainer filter={visibilityFilters.SHOW_ALL}/>} />
      </div>
    </div>
  );
}

export default App;
