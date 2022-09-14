const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;


const writeRead = require('./routes/writeRead');
const updateDelete = require('./routes/updateDelete');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use('/cr', writeRead);
app.use('/ud', updateDelete);

app.use('/', (req, res, next) => {
    res.sendStatus(404);
});

app.listen(PORT, () => console.log('Server is running on port: ' + PORT));