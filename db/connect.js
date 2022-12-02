const mongoose = require('mongoose')

const connectDB = (url) => {
  mongoose
    .connect(url, {
      //Los siguientes parámetros son para evitar las advertencias que salen por consola al coenctar la DB
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log('new conection'))
}

module.exports = connectDB
