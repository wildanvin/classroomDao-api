import { connectToDatabase } from '../lib/database'

module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') {
    return res.status(200).send('ok')
  }
  if (req.method === 'GET') {
    //Get single classroom
    const db = await connectToDatabase()
    const collection = await db.collection('classrooms')

    const classroom = await collection
      .find({
        id: req.body.id,
      })
      .toArray()

    res.status(200).json({ classroom })
  } else if (req.method === 'POST') {
    // Create new classroom
    const newClassroom = req.body

    const db = await connectToDatabase()
    const collection = await db.collection('classrooms')

    const classrooms = await collection.insertOne(newClassroom)

    res.status(200).json({ classrooms })
  } else {
    res.status(404).json({ status: 'Error, route not found' })
  }
}

// const handler = (request: NowRequest, response: NowResponse): NowResponse => {
//   if (request.method === 'OPTIONS') {
//     return response.status(200).send('ok')
//   }

//   // handle incoming request as usual
// }
