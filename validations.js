"use strict";

class Validator {
  constructor(validationObject) {
    this.validationObject = validationObject
  }

   valid (cat) {
    var errors = [];
    for (var key in cat) {
      if (this.validationObject.hasOwnProperty(key)) {
        if (typeof cat[key] !== this.validationObject[key].type) {
          errors.push(key + ' is not type ' + this.validationObject[key].type)
        }
        if (this.validationObject[key].hasOwnProperty('length')) {
          if (this.validationObject[key].length.hasOwnProperty('greaterThan')) {
            // console.log("cat:",cat[key].length)
            // console.log('proto:',this.validationObject[key].length.greaterThan)
            if (cat[key].length <= this.validationObject[key].length.greaterThan) {
              errors.push(key + ' does not have length that is > ' + this.validationObject[key].length.greaterThan)
            }
          }
        }
      }
    }
    this.errors = errors;
    return errors.length > 0 ? false : true;
  }
}

module.exports = Validator;
