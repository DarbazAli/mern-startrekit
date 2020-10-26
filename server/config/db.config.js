import { MongoClient } from 'mongodb'

const connectDB = (url) => {
  // Use connect method to connect to the server
  MongoClient.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, db) => {
      console.log('Connected successfully to mongodb server')
      db.close()
    }
  )
}

export default connectDB
