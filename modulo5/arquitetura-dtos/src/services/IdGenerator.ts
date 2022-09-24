import { v4 } from 'uuid'

export class IdGenerator {
    idGenerator() {
        throw new Error('Method not implemented.')
    }
    public generate = (): string => {
        return v4()
    }
}