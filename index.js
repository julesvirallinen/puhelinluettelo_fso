require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var morgan = require('morgan')
const cors = require('cors')
const Contact = require('./models/contact')

app.use(cors())
app.use(express.static('build'))
app.use(bodyParser.json())
morgan.token('body', function(req) {
  if (Object.getOwnPropertyNames(req.body).length == 0) return ''
  return JSON.stringify(req.body)
})

app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :body')
)

let contacts = [
  {
    id: 1,
    name: 'Julius',
    number: '666-666-666'
  },
  { id: 2, name: 'Amelie', number: '500' },
  { id: 3, name: 'John Smith', number: '505-303-934' }
]

app.get('/info', (req, res) => {
  var now = new Date()
  res.send(`<p> Phonebook has info of ${contacts.length} people </p>
            <p> ${now}`)
})

app.get('/api/persons', (req, res) => {
  Contact.find({}).then(contacts => {
    res.json(contacts.map(contact => contact.toJSON()))
  })
})

app.get('/api/persons/:id', (req, res, next) => {
  Contact.findById(req.params.id)
    .then(contact => {
      if (contact) {
        res.json(contact.toJSON())
      } else {
        res.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
  Contact.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/persons', (req, res, next) => {
  const body = req.body

  if (body.number === undefined) {
    return res.status(400).json({ error: 'phone number missing' })
  }

  if (body.name === undefined) {
    return res.status(400).json({ error: 'name missing' })
  }

  const exists = contacts.map(c => c.name).includes(body.name)
  if (exists) {
    return res.status(400).json({ error: 'name must be unique' })
  }

  const contact = new Contact({
    name: body.name,
    number: body.number
  })

  contact
    .save()
    .then(savedContact => {
      return savedContact.toJSON()
    })
    .then(savedAndFormattedContact => {
      res.json(savedAndFormattedContact)
    })
    .catch(error => {
      next(error)
    })
})

app.put('/api/persons/:id', (req, res, next) => {
  const body = req.body

  const contact = {
    name: body.name,
    number: body.number
  }

  Contact.findByIdAndUpdate(req.params.id, contact, { new: true })
    .then(updated => {
      res.json(updated.toJSON())
    })
    .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

// olemattomien osoitteiden käsittely
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError' && error.kind == 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
