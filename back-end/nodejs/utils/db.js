const { MongoClient } = require('mongodb')
const uri = process.env.CONNECTION
const client = new MongoClient(uri)
const database = client.db('to-do-list')

module.exports = database
