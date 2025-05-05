import { useState } from 'react'
import { Task } from '../../models/Task';
import { taskStorage } from '../../helpers/taskStorage';
import TasksList from './TasksList';
import { ListObject } from '../../models/ListObject';

export default () => {
    const [tasks, setTasks] = useState(taskStorage.get() ?? [
        new Task('Create list object'),
        new Task('Iterate list to display in browser'),
        new Task('Add styling using bootstrap'),
        new Task('Extra: display completed tasks'),
        new Task('Extra: unmark completed task')
    ]), {completed, uncompleted} = (() => {
        const r = {
            completed: [] as ListObject[],
            uncompleted: [] as ListObject[]
        }

        tasks.forEach((t, i) => { !t.done ? r.uncompleted.push({i, t}) : r.completed.push({i, t}) });

        return r
    })()

    const updateDone = (i: number) => {
        const newTasks = [...tasks]
        newTasks[i].done = !newTasks[i].done
        setTasks(newTasks)
        taskStorage.save(newTasks)
    }

    return <>
        <h1>ToDo:</h1>
        <TasksList tasks={uncompleted} updtFn={updateDone} />
        <h2>Completed:</h2>
        <TasksList tasks={completed} updtFn={updateDone} />
    </>
}