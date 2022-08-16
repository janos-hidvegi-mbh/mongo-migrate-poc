import { database, up } from 'migrate-mongo'

async function applyMigrations() {
    console.log('Applying new migrations')
    const { db, client } = await database.connect()
    try {
        const migrated = await up(db, client)
        migrated.forEach((name) => console.log('Applied migration: ' + name))
        if (migrated.length === 0) {
            console.log('No new migration(s) found')
        }
    } catch (e) {
        console.log('Error when running migrations')
        console.log(e)
    }
}

async function main() {
    console.log('Starting')

    await applyMigrations()
}

main().catch((e) => console.error(e))
