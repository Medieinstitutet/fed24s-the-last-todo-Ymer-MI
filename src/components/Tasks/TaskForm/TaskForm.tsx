import { ChangeEvent, useState } from 'react'
import { Task } from '../../../models/Task'
import './TaskForm.css'

type TaskFormProps = {
    addTask: (t: Task) => void
}

export default ({addTask}: TaskFormProps) => {
    const [task, setTask] = useState(Task.getDefaultTask()), handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => { 
        const {id, value} = e.target, newTask = task.copy()

        switch (id) {
            case 'prio':
                newTask.prio = +value
                break
            default:
                newTask.name = value
        }

        setTask(newTask)
    }

    return <form id='new-task' className='row needs-validation' noValidate onSubmit={(e) => {
        const validationClass = 'was-validated'

        e.preventDefault()
        e.currentTarget.classList.add(validationClass)

        if (task.name !== '') {
            addTask(task)
            setTask(Task.getDefaultTask())
            e.currentTarget.classList.remove(validationClass)
        }
    }}>
        <section>
            <label htmlFor='prio' className='form-label'>Priority:</label>
            <div className='input-group'>
                <select id='prio'className='form-select' value={task.prio} onChange={handleChange}>
                    {task.getPriorityLevels().map((l, i) => <option key={i} value={l}>{l}</option> )}
                </select>
            </div>
        </section>
        <section>
            <label htmlFor='name' className='form-label'>New task name:</label>
            <div className='input-group'>
                <input id='name' className='form-control' value={task.name} placeholder='Task to be done...' onChange={handleChange} required />
                <span className='input-group-btn'>
                    <button className='btn btn-primary'><i className='bi bi-plus'></i> Add</button>
                </span>
            </div>
            <div className='invalid-feedback'>
                The task needs a name.
            </div>
        </section>
    </form>
}