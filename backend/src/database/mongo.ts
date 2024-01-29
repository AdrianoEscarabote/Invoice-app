import { MongoClient as Mongo, Db } from "mongodb"

export const MongoClient = {
  client: undefined as unknown as Mongo,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    const url = process.env.MONGODB_URL as string
    const username = process.env.MONGODB_USERNAME as string
    const password = process.env.MONGODB_PASSWORD as string

    const client = new Mongo(url, { auth: { username, password } })
    const db = client.db("users")

    this.client = client
    this.db = db

    console.log("connected to mongodb!")
  },
}
