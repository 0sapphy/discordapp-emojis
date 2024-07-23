import { User } from "./User"

export interface Data {
    id: string,
    name: string,
    user: User,
    roles: string[],
    require_colons: boolean,
    managed: boolean,
    animated: boolean,
    available: boolean
}

export interface Items {
    items: Data[]
}