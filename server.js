const express = require('express')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.urlencoded({extended:true}));

const port = 3000

const mailChimpApiKey = "4fd3e70cc098002e5c469e19e574a5f0-us21";

app.get('/', (req, res) =>
 {
    res.sendFile(__dirname+"/index.html");
});

app.use(express.static("Public"));

app.post('/',(req, res)=>
{
    console.log(req.body);
    var firstName = req.body.firstName;

    res.send(`Thank you ${firstName} for signing up`)
});


app.listen(process.env.PORT || 3000, () => console.log(`Example app listening on port ${port}!`))