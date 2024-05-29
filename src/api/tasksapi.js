import axios from 'axios'

const tasksApi = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com/posts'
})

export const getAllTasks = () => tasksApi.get('/')

export default getAllTasks
