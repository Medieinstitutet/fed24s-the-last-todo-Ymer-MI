import { v4 as UUID } from 'uuid'

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
}