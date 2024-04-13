const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://patilgopal0318:patilgopal0318@cluster0.0cdenuf.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

module.exports = mongoose;
