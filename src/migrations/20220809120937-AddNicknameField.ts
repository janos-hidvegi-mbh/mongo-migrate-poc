import { Db, MongoClient } from 'mongodb'

export const up = async (db: Db, client: MongoClient): Promise<void> => {
    await db.collection('users').updateMany({}, { $set: { nickname: 'Jani' } })
}
