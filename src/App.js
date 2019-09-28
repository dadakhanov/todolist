import React from 'react';
import './App.css';
import AddTodoContainer from './components/AddTodo/AddTodoContainer';
import TodoListContainer from './components/TodoList/TodoListСontainer';
import { Container } from '@material-ui/core';
import TabBarContainer from './components/TabBar/TabBarContainer';
import PaginatorContainer from "./components/Paginator/PaginatorContainer";

function App() {
    return (
        <div className="App">                    
            <TabBarContainer />
            <Container maxWidth="md">
                <AddTodoContainer/>
                <PaginatorContainer/>
                <TodoListContainer />
            </Container>
        </div>
    );
}

export default App;
