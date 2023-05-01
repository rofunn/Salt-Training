const express = require('express');
const bodyParser = require('body-parser')
const app = express();


//API Middleware

//app.use(bodyParser.json()); // accept data in json format
//app.use(bodyParser.urlencoded({ extended: false }));; //decode the data send through html form
app.use(express.json());
app.use(express.static('public')) // server our public folder as a static folder


//API Routes
app.get('/bookingpage', (req, res) => {

    res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit', (req, res) => {
    console.log(req.body); //the data we get is in the body of request
    res.send("Purchase has been made");

})






const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})
