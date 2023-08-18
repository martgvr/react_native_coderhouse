import * as SQLite from 'expo-sqlite'
import { isValidName } from '../validations/auth'

const db = SQLite.openDatabase('database.db')

export const sqliteInit = ({ tableName, tableColumns }) => {
    if (!isValidName(tableName)) {
        throw new Error('Nombre de tabla no válido');
    }

    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS ${tableName} (${tableColumns})`,
                [],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    return promise
}

export const sqliteGetAll = ({ tableName }) => {
    if (!isValidName(tableName)) {
        throw new Error('Nombre de tabla no válido');
    }

    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `SELECT * FROM ${tableName}`,
                [],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    return promise
}

export const sqliteDelete = ({ tableName, condition, params }) => {
    if (!isValidName(tableName)) {
        throw new Error('Nombre de tabla no válido');
    }

    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `DELETE FROM ${tableName} WHERE ${condition}`,
                params,
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    return promise
}

export const sqliteDrop = ({ tableName }) => {
    if (!isValidName(tableName)) {
        throw new Error('Nombre de tabla no válido');
    }

    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `DROP TABLE IF EXISTS ${tableName}`,
                [],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    return promise
}

export const sqliteInsert = ({ tableName, columns, params }) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `INSERT INTO ${tableName} (${columns}) VALUES (?, ?, ?);`,
                params,
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    return promise
}