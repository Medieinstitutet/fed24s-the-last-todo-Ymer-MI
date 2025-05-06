import { Task, TaskType } from "../models/Task";

const TASK_STORAGE_KEY = 'tasks';

export const taskStorage = {
    save: (tasks: Task[]) => { localStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(tasks)) },
    get: () => {
        const lsStr = localStorage.getItem(TASK_STORAGE_KEY)

        return !lsStr ? undefined : (JSON.parse(lsStr) as TaskType[]).map(t => Task.createFromType(t))
    } 
}