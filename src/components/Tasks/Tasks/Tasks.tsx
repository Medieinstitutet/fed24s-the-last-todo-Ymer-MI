import { useState } from 'react'
import { Task } from '../../../models/Task'
import { taskStorage } from '../../../helpers/taskStorage'
import TasksList, { ListObject } from '../TaskList/TasksList'
import TaskForm from '../TaskForm/TaskForm'
import './Tasks.css'

export default () => {
    const [tasks, setTasks] = useState(taskStorage.get() ?? [
        new Task('Create list object', 1),
        new Task('Iterate list to display in browser', 2),
        new Task('Add styling using bootstrap', 3),
        new Task('Extra: display completed tasks', 1),
        new Task('Extra: unmark completed task', 2)
    ]), [sortOrder, setSortOrder] = useState('name'), {completed, uncompleted} = (() => {
        const r = {
            completed: [] as ListObject[],
            uncompleted: [] as ListObject[]
        }

        tasks.forEach((t, i) => { !t.done ? r.uncompleted.push({i, t}) : r.completed.push({i, t}) });

        return r
    })(), addTask = (t: Task) => {
        const newTasks = [...tasks, t]

        setTasks(newTasks)
        taskStorage.save(newTasks)
    }, sortTasks = () => {
        const newTasks = [...tasks]
                    
        newTasks.sort((a, b) => sortOrder === 'name' ?  a.name.localeCompare(b.name) : a.prio - b.prio)
        
        setTasks(newTasks)
        taskStorage.save(newTasks)
    }, updateDone = (i: number) => {
        const newTasks = [...tasks]
        
        newTasks[i].done = !newTasks[i].done
        setTasks(newTasks)
        taskStorage.save(newTasks)
    }

    return <section id='page-tasks'>
        <TaskForm addTask={addTask} />
        <div id='task-lists'>
            <section id='sorting-container'>
                <label htmlFor="sort">Sort on:</label>
                <select id='sort' className='form-select' value={sortOrder} onChange={e => {
                    (() => {setSortOrder(e.target.value)})()
                    sortTasks()
                }}>
                    <option value='name'>Name</option>
                    <option value='prio'>Priority</option>
                </select>

            </section>
            <section className='d-inline-block col-md-6'>
                <h1>ToDo:</h1>
                <TasksList tasks={uncompleted} updtFn={updateDone} />
            </section>
            <section className='d-inline-block col-md-6'>
                <h2>Completed:</h2>
                <TasksList tasks={completed} updtFn={updateDone} />
            </section>
        </div>
    </section>
}