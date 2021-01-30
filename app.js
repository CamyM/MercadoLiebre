const express = require('express');
const path = require('path');

const app = express();

app.listen(process.env.PORT || 3002, function() {
    console.log("servidor corriendo en el puerto 3002");

})

const staticFolder = path.resolve(__dirname, './public');
app.use(express.static(staticFolder))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
});

