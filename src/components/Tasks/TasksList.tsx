import { ListObject } from '../../models/ListObject'
import TaskItem from './TaskItem'

type ListProps = {
    tasks: ListObject[]
    updtFn: (i: number) => void
}

export default ({tasks, updtFn}: ListProps) => <ul>
        { tasks.map(lo => <TaskItem key={lo.t.getId()} task={lo.t} updtFn={updtFn} i={lo.i} />) }
    </ul>