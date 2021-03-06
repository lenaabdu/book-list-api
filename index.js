const express = require('express')
const app = express()
const port = process.env.PORT || 3004
const router = require('./router');

const morgan = require('morgan');
const cors = require('cors');


app.use(morgan('combined'));
app.use(cors());
app.use(express.json());
app.use(router)

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});