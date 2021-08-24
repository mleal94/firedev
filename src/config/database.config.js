const mongoose = require('mongoose');

// Init DB
mongoose.connect(`mongodb://${process.env.DB_URI}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
  .then(() => console.log('DB connected'))
  .catch((error) => console.log(error));
