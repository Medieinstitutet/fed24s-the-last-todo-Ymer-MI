import { Task } from '../../models/Task'
import TaskItem from './TaskItem'

export type ListObject = {
    i: number
    t: Task
}

type ListProps = {
    tasks: ListObject[]
    updtFn: (i: number) => void
}

export default ({tasks, updtFn}: ListProps) => <ul>
        { tasks.map(lo => <TaskItem key={lo.t.getID()} task={lo.t} updtFn={updtFn} i={lo.i} />) }
    </ul>