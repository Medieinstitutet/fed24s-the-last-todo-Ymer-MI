import { v4 as UUID, validate } from 'uuid'

export class Task {
    private id: string
    name: string
    done: boolean

    constructor(name: string, done = false) {
        this.id = UUID()
        this.name = name
        this.done = done
    }

    getId = () => this.id

    setID = (s: string) => {
        if (validate(s)) {
            this.id = s
        } else if ([undefined, null, ''].includes(this.id)) {
            this.id = UUID()
        }
        
        return this
    }
}