const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const todoRoutes = require('../routes/todoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/todo_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js CRUD API');
});

// Use the todo routes
app.use('/api', todoRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
