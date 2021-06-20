const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password:{
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [8, 'Minimum password length is 6 characters'],
    },
    name:{
        type: String,
        required : true
    },
    userType:{
        type: String,
        required : true
    }
});
// fire a function before doc saved to db
/*UserSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });*/

  UserSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
      if (user) {
       // const auth = await bcrypt.compare(password, user.password);
        if(user.password == password)
        {
          return user;
        }
        /*if (auth) {
          return user;
        }*/
        throw Error('incorrectt password');
      }
      throw Error('incorrect email');
    };

const User = mongoose.model('User',UserSchema);
module.exports = User;