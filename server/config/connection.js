const mongoose = require('mongoose');

mongoose.connect(process.eng.MONGODB_URI || 'mongodb://localhost:27017/fonzake', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;