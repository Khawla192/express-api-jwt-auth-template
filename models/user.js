const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('userSchema', userSchema);

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      delete returnedObject.hashedPassword;
    }
});

module.exports = User;
