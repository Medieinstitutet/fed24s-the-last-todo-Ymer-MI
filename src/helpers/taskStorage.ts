import { Task } from "../models/Task";

const TASK_STORAGE_KEY = 'tasks';

type StoredTask = {
    id: string
    name: string
    done: boolean
}

export const taskStorage = {
    save: (tasks: Task[]) => { localStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(tasks)) },
    get: () => {
        const lsStr = localStorage.getItem(TASK_STORAGE_KEY)

        return !lsStr ? undefined : (JSON.parse(lsStr) as StoredTask[]).map(t => new Task(t.name, t.done).setID(t.id))
    } 
}