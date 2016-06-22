"use strict";

class Validator {
  constructor(validationObject) {
    this.validationObject = validationObject
    this.errors = []
  }

   valid (cat) {
    for (var key in cat) {
      if (this.validationObject.hasOwnProperty(key)) {
        this.validationObject[key].hasOwnProperty('type') ? this.checkType(cat, key) : false
        this.validationObject[key].hasOwnProperty('length') ? this.checkLength(cat, key) : false
      }
    }
    return this.errors.length > 0 ? false : true;
  }

  checkType (obj, key) {
    if (typeof obj[key] !== this.validationObject[key].type) {
      this.errors.push(key + ' is not type ' + this.validationObject[key].type)
    }
  }

  checkLength (obj, key) {
    if (this.validationObject[key].length.hasOwnProperty('greaterThan')) {
      if (obj[key].length <= this.validationObject[key].length.greaterThan) {
        this.errors.push(key + ' does not have length that is > ' + this.validationObject[key].length.greaterThan)
      } // greater than
    } // checks length key for greaterThan value
  } // checks for property length

}

module.exports = Validator;
