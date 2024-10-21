const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const socketIo = require('socket.io');

// MongoDB connection URL
const url = 'mongodb+srv://ajay:ajay2024@cluster0.0lqez.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Update if needed

// Create an Express app and HTTP server
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Connect to MongoDB
mongoose.connect(url)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// Middleware to serve static files
app.use(express.static(__dirname)); // Serve index.html and other static files

// Socket.io connection
io.on('connection', (socket) => {
    console.log('A user connected');

    // Listen for chat messages
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg); // Broadcast the message to all clients
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});


//npm install express mongoose socket.io
//npm init -y
//node filename.js
//mongodb =mongodb+srv://ajay:ajay2024@cluster0.0lqez.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0