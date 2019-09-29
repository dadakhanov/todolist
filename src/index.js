import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import combinedReducers from './reducer'
import thunk from 'redux-thunk'

const store = createStore(combinedReducers, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'))


serviceWorker.unregister();
