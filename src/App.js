import React from 'react';
import './App.css';
import AddTodo from './containers/AddTodo';
import TodoList from './containers/TodoList';
import NavbarFilters from './components/NavbarFilters';
import { Route } from 'react-router-dom'
import { visibilityFilters } from './visibilitiFilters';
import SearchBar from './containers/SearchBar';


function App() {
  return (
    <div className="App">
      <div>        
        <NavbarFilters />        
        <SearchBar />
      </div>
      <div>        
        <AddTodo />
        <Route exact path={["/active","/"]}  render={()=><TodoList filter={visibilityFilters.SHOW_ACTIVE}/>} />
        <Route path="/completed" render={()=><TodoList filter={visibilityFilters.SHOW_COMPLETED}/>} />
        <Route path="/all" render={()=><TodoList filter={visibilityFilters.SHOW_ALL}/>} />
      </div>
    </div>
  );
}

export default App;
