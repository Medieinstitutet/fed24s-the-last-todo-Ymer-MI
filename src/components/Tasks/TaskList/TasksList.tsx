import { Task } from '../../../models/Task'
import TaskItem, { TaskFns } from './TaskItem'

export type ListObject = {
    i: number
    t: Task
}

type ListProps = TaskFns & {
    tasks: ListObject[]
}

export default ({tasks, updtFn, rmFn}: ListProps) => <ul className='row justify-content-center'>
        { tasks.map(lo => <TaskItem key={lo.t.getID()} task={lo.t} i={lo.i} updtFn={updtFn} rmFn={rmFn} />) }
    </ul>