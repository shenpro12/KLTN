const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
//morgan
app.use(morgan('combined'));
//template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
//
app.get('/', (req, res) => {
    res.render('home');
})
app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening on port ${port}`);
})