import { Task } from '../../../models/Task'
import './TaskItem.css'

export type TaskFns = {
    updtFn: (i: number) => void
    rmFn: (i: number) => void
}

type TaskItemProps = TaskFns & {
    task: Task
    i: number
}

export default ({task, i, updtFn, rmFn}: TaskItemProps) => <li className='input-group'>
    <div className='input-group-text'>
        <input className='form-control' type="number" disabled value={task.prio}  />
    </div>
    <span className='input-group-text'>{task.name}</span>
    <div className='input-group-text'>
        <input className='form-check-input mt-0' type='checkbox' checked={task.done} onChange={() => {updtFn(i)}} />
    </div>
    <button type='button' className='btn btn-danger' onClick={() => {rmFn(i)}}><i className='bi bi-trash3'></i> Remove</button>
</li>