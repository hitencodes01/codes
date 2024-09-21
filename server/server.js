const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');  // Import the cors package

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://hiteng53:vahiwalahiten@cluster0.efuiqov.mongodb.net/'
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define the schema and model
const todoSchema = new mongoose.Schema({
  title: String,
  timestamp : Number,
  completed: Boolean,
  favourite: Boolean
});

const Todo = mongoose.model('Todo', todoSchema);

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the To-Do Application');
});

// Get all todos
app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Create a new todo
app.post('/todos', async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    timestamp : req.body.timestamp,
    completed: req.body.completed || false,
    favourite: req.body.favourite
  });

  try {
    const savedTodo = await todo.save();
    res.json(savedTodo);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update a todo
app.put('/todos/:id', async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title: req.body.title, completed: req.body.completed, favourite: req.body.favourite },
      { new: true }
    );
    res.json(updatedTodo);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Delete a todo
app.delete('/todos/:id', async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    res.json(deletedTodo);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});