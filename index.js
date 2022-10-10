const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://emil:1e2m3i4l@cluster0.der8evf.mongodb.net/?retryWrites=true&w=majority');
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
const kittySchema = new mongoose.Schema({
  name: String
});
const Kitten = mongoose.model('Kitten', kittySchema);
const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'
app.use(express.static('public'))

app.get('/', (req, res) => {
  new Kitten({ name: 'ABC' }).save()
    res.send('Hello World!')

  })
 
  
  app.post('/', (req, res) => {
    res.send('Got a POST request')
  })
  
  app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
  })
  
  app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})