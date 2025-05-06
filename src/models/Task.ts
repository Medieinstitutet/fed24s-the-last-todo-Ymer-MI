import { v4 as UUID, validate } from 'uuid'

export class Task {
    private id = UUID()
    static readonly PRIORITY_LEVELS = {
        LOW: 1,
        MEDIUM: 2,
        HIGH: 3
    }

    constructor(public name: string, public prio = Task.PRIORITY_LEVELS.LOW, public done = false) {}

    getPriorityLevels = () => Object.values(Task.PRIORITY_LEVELS)

    getId = () => this.id

    setID = (s: string) => {
        if (validate(s)) {
            this.id = s
        } else if ([undefined, null, ''].includes(this.id)) {
            this.id = UUID()
        }
        
        return this
    }

    static getDefaultTask = () => new Task('')
}