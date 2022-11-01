const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
  writer: {
    type: S
  }
})
mongoose.connect('mongodb+srv://chnbroa:123@cluster0.4a6bbqr.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!_123')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

