const testSend = (req, res, next) =>{
  res.status(200).json({
    body: 'Hello, this is a test from the server'
  })
}

module.exports.testSend = testSend