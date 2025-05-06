import { ChangeEvent, useState } from 'react'
import { Task } from '../../models/Task'

type TaskFormProps = {
    addTask: (t: Task) => void
}

export default ({addTask}: TaskFormProps) => {
    const [task, setTask] = useState(Task.getDefaultTask()), handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => { 
        const {id, value} = e.target, newTask = new Task(task.name, task.prio, task.done).setID(task.getId())

        switch (id) {
            case 'prio':
                newTask.prio = +value
                break
            default:
                newTask.name = value
        }

        setTask(newTask)
    }

    return <form onSubmit={(e) => {
        e.preventDefault()

        if (task.name !== '') {
            addTask(task)
            setTask(Task.getDefaultTask())
        } else {
            alert('Please enter a task name!')
        }
    }}>
        <section>
            <label htmlFor="prio">Priority:</label>
            <select id="prio" value={task.prio} onChange={handleChange}>
                {task.getPriorityLevels().map((l, i) => <option key={i} value={l}>{l}</option> )}
            </select>
        </section>
        <section>
            <label htmlFor='name'>New task name:</label>
            <input id='name' value={task.name} placeholder='Task to be done...' onChange={handleChange} required/>
            <button>Add new task</button>
        </section>
    </form>
}