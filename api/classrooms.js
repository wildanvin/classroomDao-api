import { connectToDatabase } from '../lib/database'

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    //Get all classrooms
    const db = await connectToDatabase()
    const collection = await db.collection('classrooms')

    const classrooms = await collection.find({}).toArray()

    res.status(200).json({ classrooms })
  } else {
    res.status(404).json({ status: 'Error, route not found' })
  }
}
