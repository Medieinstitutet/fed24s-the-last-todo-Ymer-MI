import { v4 as UUID, validate } from 'uuid'

interface ITask {
    name: string
    prio: number
    done: boolean
}

export type TaskType =  ITask & { id: string }

export class Task implements ITask {
    private id = UUID()
    static readonly PRIORITY_LEVELS = {
        HIGH: 1,
        MEDIUM: 2,
        LOW: 3
    }

    constructor(public name: string, public prio = Task.PRIORITY_LEVELS.LOW, public done = false) {}
    
    protected setID = (s: string) => {
        if (validate(s)) {
            this.id = s
        } else if ([undefined, null, ''].includes(this.id)) {
            this.id = UUID()
        }
        
        return this    
    }

    static createFromType = (t: TaskType | Task) => new Task(t.name, t.prio, t.done).setID(t instanceof Task ? t.getID() : t.id)

    static getDefaultTask = () => new Task('')

    getPriorityLevels = () => Object.values(Task.PRIORITY_LEVELS)

    getID = () => this.id

    copy = () => Task.createFromType(this)
}