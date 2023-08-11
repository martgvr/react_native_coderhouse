import * as SQLite from 'expo-sqlite'
import { isValidName } from '../validations/auth';

const db = SQLite.openDatabase('sessions.db')

export const sqliteInit = (tableName) => {
    if (!isValidName(tableName)) {
        throw new Error('Nombre de tabla no válido');
    }

    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS ${tableName} (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, idToken TEXT NOT NULL)`,
                [],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    return promise
}

export const dropTable = (tableName) => {
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

export const insertSession = ({ email, localID, idToken }) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO sessions (email, localID, idToken) VALUES (?, ?, ?);',
                [email, localID, idToken],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    return promise
}

export const getSession = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM sessions',
                [],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    return promise
}

export const deleteSession = (localID) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'DELETE FROM sessions WHERE localID = ?',
                [localID],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    return promise
}