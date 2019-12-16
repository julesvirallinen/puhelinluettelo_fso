const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')

const url = process.env.MONGO_URL

console.log('connecting to', url)

mongoose
  .connect(url, { useNewUrlParser: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message)
  })

const contactSchema = new mongoose.Schema({
  name: { type: String, unique: true, minlength: 3 },
  number: { type: String, minlength: 8 }
})
contactSchema.plugin(uniqueValidator)

contactSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Contact', contactSchema)
