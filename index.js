const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const app = express();
const pgp = require('pg-promise')({})
const jifunze_ffs = require('./factory-function');

let useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
    useSSL = true;
}

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://postgres:pg123@localhost:5432/jifunze_db';

const config = {
    connectionString: DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
}

const db = pgp(config);
const jifunze = jifunze_ffs(db);

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'))

// app.get('/', async function(req, res){
//     // res.render('index') never use render in api


// })

const PORT = process.env.PORT || 3008

app.listen(PORT, function() {
    console.log('App started at port:', PORT)

})