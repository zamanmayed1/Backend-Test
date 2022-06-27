const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// Mayed 

app.post('/makeastudent', (req, res) => {
  let data = {
    name: " Kamruzzaman Mayed",
    id: "WEB-3126",
    email: "zamanmayed@gmail.com"
  }
  console.log(data);

})

// anik
app.get('/user', async (req, res) => {
  const products = req.body

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})