const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const url =
  `mongodb+srv://fullstack:${password}@cluster0-0y0jw.mongodb.net/test?retryWrites=true&w=majority`

  mongoose.connect(url, { useNewUrlParser: true })
const contactSchema = new mongoose.Schema({
  name: String,
  number: Number,
})

const Contact = mongoose.model('Contact', contactSchema)

if (!process.argv[3]) {
    console.log('phonebook:')
    Contact.find({}).then(result => {
        result.forEach(contact => {
          console.log(`${contact.name} ${contact.number}`)
        })
        mongoose.connection.close()
      })
      
} else {

const contact = new Contact({
  name: process.argv[3],
  number: process.argv[4],
})

contact.save().then(response => {
  console.log(`added ${contact.name} ${contact.number} to database!`);
  mongoose.connection.close();
})

}
