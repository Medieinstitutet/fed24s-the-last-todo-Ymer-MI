import { Task } from '../../../models/Task'
import './TaskItem.css'

type TaskItemProps ={
    task: Task
    updtFn: (i: number) => void
    i: number
}

export default ({task, updtFn, i}: TaskItemProps) => <li className='input-group'>
    <div className='input-group-text'>
        <input className='form-control' type="number" disabled value={task.prio}  />
    </div>
    <span className='input-group-text'>{task.name}</span>
    <div className='input-group-text'>
        <input className='form-check-input mt-0' type='checkbox' checked={task.done} onChange={() => {updtFn(i)}} />
    </div>
</li>