const express = require('express');
const bodyParser = require ('body-parser');

const db = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    // res.send('Hello')
    db.invoices.findAll()
    .then(result => {
        res.json(result)
        // res.json(`the results are the following${result}`);
    })
})

app.get('/newtodos', (req, res) => {
    res.render('newtodos', {
        title: "retrive information",
    })
});


app.listen(PORT, () => console.log(`The server is running on HTTP://localhost${PORT}`))