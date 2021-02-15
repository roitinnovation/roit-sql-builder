import * as fs from "fs";

export class SqlManager {

    private static readonly SQL_DIR = "sql"

    static read(sqlName: string): string {
        return fs.readFileSync(`${process.cwd()}/${this.SQL_DIR}/${sqlName}`).toString();
    }

}