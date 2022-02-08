const express = require("express");
const Datastore = require('nedb');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`App listen's to port - ${port}`);
})

app.use(express.static('public'))
app.use(express.json({ limit: '10mb' }))

// Datubaze
const database = new Datastore('database.db');
database.loadDatabase();

// Ieladejam visus datus no pieprasīta cela
app.get('/all', (request, response) => {
    database.find({}, (err, data) => {
        response.json(data); 
    })
    
})

app.post('/api', (request, response) => {

    // dati tiek saglabati serveri ja ir post metode, tiek pieprasits nosutitais kermenis
    const data = request.body;
    // databaze ievietojam pieprasitos datus
    database.insert(data)
    // atpakal uz pieprasita response nosutam datus
    response.json(data);
})

// MANS TESTA VARIANTS
app.post('/input', (request, response) => {
    const data = request.body;

    database.insert(data);

    response.json({
        userInput: data.userText
    })
})