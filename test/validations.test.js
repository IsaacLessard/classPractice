"use strict";
var expect = require('chai').expect;
var Validator = require('../validations');

describe('Validator', function(){
  describe('valid', function(){
    var catValidations = {
      name: {type: 'string', length: {greaterThan: 0}},
      breed: {type: 'string', length: {greaterThan: 0}},
      age: {type: 'number'}
    };
    var catValidator;

    beforeEach(function(){
      catValidator = new Validator(catValidations);
    });

    it('returns true for a valid object', function(){
      var validCat = {
        name: 'Mittens',
        breed: 'American Shorthair',
        age: 10,
        weight: 13
      };
      expect(catValidator.valid(validCat)).to.be.true;
    }); // it
    it('returns false if string values do NOT match length requirements', function(){
      var missingNameCat = {
        name: '',
        breed: 'American Shorthair',
        age: 10,
        weight: 13
      }
      expect(catValidator.valid(missingNameCat)).to.be.false;
    }) // it
    it('returns false if string values do NOT match type requirements', function(){
      var missingNameCat = {
        name: 49,
        breed: 'American Shorthair',
        age: 10,
        weight: 13
      }
      expect(catValidator.valid(missingNameCat)).to.be.false;
    }) // it
    it('returns false if numeric values do not pass validations', function(){
      var validCat = {
        name: 'Mittens',
        breed: 'American Shorthair',
        age: "10",
        weight: '13'
      };
      expect(catValidator.valid(validCat)).to.be.false;
    }) // it
    it('should return the error if the validator returns a falsy', function(){
      var missingNameCat = {
        name: '',
        breed: 'American Shorthair',
        age: 10,
        weight: 13
      }
      var errObj = ['name does not have length that is > 0']
      catValidator.valid(missingNameCat)
      expect(catValidator.errors).to.deep.equal(errObj);
    }) // it
    it('should return the errors if the validator returns a falsy in multiple areas', function(){
      var missingNameCat = {
        name: '',
        breed: 'American Shorthair',
        age: '10',
        weight: 13
      }
      var errObj = ['name does not have length that is > 0', 'age is not type number']
      catValidator.valid(missingNameCat)
      expect(catValidator.errors).to.deep.equal(errObj);
    }) // it
  }); // describe

})
