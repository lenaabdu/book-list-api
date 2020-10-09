const express = require('express')
const app = express()
const port = process.env.PORT || 300
const router = require('./router');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/database', {

    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true

});
app.use(helmet());
app.use(morgan('combined'));
app.use(cors());
app.use(express.json());
app.use(router)

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log("Database Connected")
});