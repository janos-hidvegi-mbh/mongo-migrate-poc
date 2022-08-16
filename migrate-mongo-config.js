// In this file you can configure migrate-mongo

const config = {
    mongodb: {
        // TODO Change (or review) the url to your MongoDB:
        url: 'mongodb://root:password@127.0.0.1:27017',

        // TODO Change this to your database name:
        databaseName: 'poc2',

        options: {
            useNewUrlParser: true, // removes a deprecation warning when connecting
            useUnifiedTopology: true, // removes a deprecating warning when connecting
            //   connectTimeoutMS: 3600000, // increase connection timeout to 1 hour
            //   socketTimeoutMS: 3600000, // increase socket timeout to 1 hour
        },
    },

    // The migrations dir, can be an relative or absolute path. Only edit this when really necessary.
    migrationsDir: 'src/migrations',

    // The mongodb collection where the applied changes are stored. Only edit this when really necessary.
    changelogCollectionName: 'migrations',

    // The file extension to create migrations and search for in migration dir
    migrationFileExtension: '.ts',

    // Enable the algorithm to create a checksum of the file contents and use that in the comparison to determin
    // if the file should be run.  Requires that scripts are coded to be run multiple times.
    useFileHash: true,

    // Don't change this, unless you know what you're doing
    moduleSystem: 'commonjs',
}

module.exports = config
