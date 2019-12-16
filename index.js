const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var morgan = require('morgan')
const cors = require('cors')

app.use(cors())


app.use(bodyParser.json());
morgan.token('body', function (req, res) { return JSON.stringify(req.body)})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))



let contacts = [
  {
    id: 1,
    name: "Julius",
    number: "666-666-666"
  },
  { id: 2, name: "Amelie", number: "500" },
  { id: 3, name: "John Smith", number: "505-303-934" }
];

app.get("/info", (req, res) => {
  var now = new Date();
  res.send(`<p> Phonebook has info of ${contacts.length} people </p>
            <p> ${now}`);
});

app.get("/api/persons", (req, res) => {
  res.json(contacts);
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const contact = contacts.find(contact => contact.id === id);

  if (contact) {
    res.json(contact);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  contacts = contacts.filter(contact => contact.id !== id);

  res.status(204).end();
});

app.post("/api/persons", (req, res) => {
  const body = req.body;

  if (!body.number) {
    return res.status(400).json({
      error: "phone number missing"
    });
  }

  if (!body.name) {
    return res.status(400).json({
      error: "name missing"
    });
  }

  const exists = contacts.map(c => c.name).includes(body.name)

  if (exists) {
    return res.status(400).json({
      error: "name must be unique"
    });
  }


  const id = Math.floor(Math.random() * 100000);

  const contact = {
    name: body.name,
    number: body.number,
    id: id
  };

  contacts = contacts.concat(contact);
  res.json = contact;
});

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
