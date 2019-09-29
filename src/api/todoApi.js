import axios from 'axios'

const baseApi = "http://mobile.iceberry.ru:8095/api/"
const todosApi = "todos/"

export function getTodos(filter, pageSize, pageOffset) {
    const url = `${baseApi}${todosApi}?filter=${filter}&limit=${pageSize}&offset=${pageOffset}`
    console.log("GET " + url)
    return axios.get(url)
}

export function saveTodo(todo) {
    const url = `${baseApi}${todosApi}${todo.id}`
    console.log("PUT " + url)
    return axios.put(url, {...todo})
}

export function deleteTodo(id) {
    const url = `${baseApi}${todosApi}${id}`
    console.log("DELETE " + url)
    return axios.delete(url)
}

export function addTodo(text) {
    const url = `${baseApi}${todosApi}`
    console.log("POST " + url)
    return axios.post(url, {text})
}