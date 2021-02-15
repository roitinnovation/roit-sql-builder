import { SqlManager } from "./SQLFileImportService"

export const buildQueryString = <T>(fileName: string, object: T): string => {
    let query = SqlManager.read(fileName)
    const properties = Object.entries(object)
    console.log(properties)
    properties.forEach(prop => {
        const [key, value] = prop
        query = query.replace(`@${key}`, value.toString())
    })

    if (query.match(/@/g)) {
        throw new Error(`Missing arguments, check your query parameters: \n ${query} \n`)
    }

    return query
}