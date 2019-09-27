import React from 'react';
import './App.css';
import AddTodoContainer from './components/AddTodo/AddTodoContainer';
import TodoListContainer from './components/TodoList/TodoListСontainer';
import { Container } from '@material-ui/core';
import CenteredTabsContainer from './components/CenteredTabs/CenteredTabsContainer';

function App() {
    
    return (
        <div className="App">                    
            <CenteredTabsContainer />
            <Container maxWidth="md">
                <AddTodoContainer/>
                <TodoListContainer />
            </Container>
        </div>
    );
}

export default App;
