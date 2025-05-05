import { Task } from '../../models/Task'

type TaskItemProps ={
    task: Task
    updtFn: (i: number) => void
    i: number
}

export default ({task, updtFn, i}: TaskItemProps) => <li>
        <span>{task.name}</span>
        <input type='checkbox' checked={task.done} onChange={() => {updtFn(i)}} />
    </li>