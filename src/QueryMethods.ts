import { SqlManager } from "./SQLFileImportService"

export const buildQueryString = <T>(fileName: string, object: T, hasEmail: boolean = false): string => {
    let query = SqlManager.read(fileName)
    const properties = Object.entries(object)
    properties.forEach(prop => {
        let [key, value] = prop
        if (typeof value == 'string') {
            value = `'${value}'`
        }
        query = query.replace(`@${key.toLowerCase()}`, value)
    })

    if (query.match(/@/g) && !hasEmail) {
        throw new Error(`Missing arguments, check your query parameters: \n ${query} \n`)
    }

    return query
}