# Mongo migrate PoC

This repo contains a proof of concept for creating data migration scripts for MongoDB.

## Scripts
`yarn migrate:create <name>` creates a migration in the migrations folder.
`yarn migrate` Applies all migrations.
`yarn migrate:status` Shows the status of the migrations.

## Structure
migrate-mongo-config.js - Configuration for the migrations.

src/migrations - Folder for the migrations.

## Recommendations for writing migrations
1. Never make braking changes to the database. -> Don't remove or rename fields / collections.
2. Make sure migrations can be run multiple times.
3. Don't make down migration scripts. Instead, make a new migration that undoes the previous migration.

## General
- A migration is considered applied if the migration script returned without errors.
- In the migrations folder there is a file called `sample-migration.ts`. This is a template for new migrations.
