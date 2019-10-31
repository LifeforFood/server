if(process.env.NODE_ENV == 'development'){
  require('dotenv').config()
}

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;
const app = express();
const errorHandler = require('./middlewares/errorHandler');
const index = require('./routes/index');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true})
  .then(() => {
    console.log(`MongoDb Connect`);
  })
  .catch(console.log);

app.use('/', index);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))