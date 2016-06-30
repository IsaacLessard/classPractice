var db = require('../config/db')

var User = db.Model.extend({
  tableName: 'users',

  validateInput: function(input){
    var error = {};
    var emailError = this.isValidEmail(input.email);
    var passwordError = this.isValidPassword(input.password);
    var confirmPassError = this.isPassword(input.password, input.confirmPass);

    if(emailError) error.email = emailError;
    if(passwordError) error.password = passwordError;
    if(confirmPassError) error.confirmPass = confirmPassError;

    if(error.email || error.password || error.confirmPass) input.error = error;

    return input;
  },

  isValidEmail: function(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(email)){
      return(email + " is not a valid email address");
    }
  },

  isValidPassword: function(password){
    var re = /^(?=.*\d).{4,8}$/;
    if(!re.test(password)){
      console.log("bad password");
      return("password must be bewteen 4-8 digits with at least one number");
    }
  },

  isPassword: function(password, confirmPass){
    if(password !== confirmPass){
      return "passwords don't match"
    }
  }

});

module.exports = User
