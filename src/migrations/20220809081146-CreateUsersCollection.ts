import { Db, MongoClient } from 'mongodb'

export const up = async (db: Db, client: MongoClient): Promise<void> => {
    if (
        (await (await db.listCollections()).toArray())
            .map((c) => c.name)
            .includes('users')
    ) {
        // Users collection already exists
        return
    }
    await db.createCollection('users')
}
