const errorHandlerMiddleware = (err, req, res, next) => {
  const { message } = err
  return res.status(500).json({ message })
}

module.exports = errorHandlerMiddleware
