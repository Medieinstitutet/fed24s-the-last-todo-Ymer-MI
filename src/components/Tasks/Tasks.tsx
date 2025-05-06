import { useState } from 'react'
import { Task } from '../../models/Task';
import { taskStorage } from '../../helpers/taskStorage';
import TasksList, { ListObject } from './TasksList';
import TaskForm from './TaskForm/TaskForm';

export default () => {
    const [tasks, setTasks] = useState(taskStorage.get() ?? [
        new Task('Create list object', 1),
        new Task('Iterate list to display in browser', 2),
        new Task('Add styling using bootstrap', 3),
        new Task('Extra: display completed tasks', 1),
        new Task('Extra: unmark completed task', 2)
    ]), {completed, uncompleted} = (() => {
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
    }, sortTasks = (s: string) => {

    }, updateDone = (i: number) => {
        const newTasks = [...tasks]
        
        newTasks[i].done = !newTasks[i].done
        setTasks(newTasks)
        taskStorage.save(newTasks)
    }

    return <section id='page-tasks'>
        <TaskForm addTask={addTask} />
        <section>
            <h1>ToDo:</h1>
            <TasksList tasks={uncompleted} updtFn={updateDone} />
        </section>
        <section>
            <h2>Completed:</h2>
            <TasksList tasks={completed} updtFn={updateDone} />
        </section>
    </section>
}