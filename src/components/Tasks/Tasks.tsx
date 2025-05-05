import { useState } from 'react'
import { Task } from '../../models/Task'

export default () => {
    const [tasks, setTasks] = useState([
        new Task('Create list object'),
        new Task('Iterate list to display in browser'),
        new Task('Add styling using bootstrap'),
        new Task('Extra: display completed tasks'),
        new Task('Extra: unmark completed task')
    ])
    
    return <></>
}