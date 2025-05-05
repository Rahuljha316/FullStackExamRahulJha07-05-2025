const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

const sequelize = require('./config/sql');
const mongo = require('./config/mongo')


sequelize.sync();
mongo();

app.listen(PORT, () => {
    console.log(`server running on port ${PORT} `)
})