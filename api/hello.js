module.exports = async (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json({ hello: 'Hope you are having a nice day :)' })
  }
}
