import * as SQLite from 'expo-sqlite'
import { isValidName } from '../validations/auth'

const db = SQLite.openDatabase('database.db')

class sqliteDB {
    constructor(tableName) {
        if (isValidName(tableName)) {
            this.tableName = tableName
        } else {
            throw new Error(`Nombre de tabla no válido: [ ${tableName} ]`);
        }
    }

    init = (tableColumns) => {
        const promise = new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    `CREATE TABLE IF NOT EXISTS ${this.tableName} (${tableColumns})`,
                    [],
                    (_, result) => resolve(result),
                    (_, error) => reject(error)
                )
            })
        })
        return promise
    }

    getAll = () => {
        const promise = new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    `SELECT * FROM ${this.tableName}`,
                    [],
                    (_, result) => resolve(result),
                    (_, error) => reject(error)
                )
            })
        })
        return promise
    }

    delete = ({ condition, params }) => {
        const promise = new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    `DELETE FROM ${this.tableName} WHERE ${condition}`,
                    params,
                    (_, result) => resolve(result),
                    (_, error) => reject(error)
                )
            })
        })
        return promise
    }

    insert = ({ columns, params }) => {
        const columnsQuantity = columns.split(", ").length
        const valuesResult = Array(columnsQuantity).fill("?").join(", ")
    
        const promise = new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    `INSERT INTO ${this.tableName} (${columns}) VALUES (${valuesResult});`,
                    params,
                    (_, result) => resolve(result),
                    (_, error) => reject(error)
                )
            })
        })
        return promise
    }

    drop = () => {
        const promise = new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    `DROP TABLE IF EXISTS ${this.tableName}`,
                    [],
                    (_, result) => resolve(result),
                    (_, error) => reject(error)
                )
            })
        })
        return promise
    }

    update = ({ column, oldValue, newValue }) => {
        const promise = new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    `UPDATE ${this.tableName} SET ${column} = '${newValue}' WHERE ${column} = '${oldValue}'`,
                    [],
                    (_, result) => resolve(result),
                    (_, error) => reject(error)
                )
            })
        })
        return promise
    }
}

export const ordersDB = new sqliteDB("orders")
export const sessionsDB = new sqliteDB("sessions")
export const appConfigDB = new sqliteDB("appConfig")