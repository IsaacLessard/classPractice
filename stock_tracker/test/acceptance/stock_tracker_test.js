var expect = require('chai').expect
var request = require('supertest');
var app = require('../../app');

require('../helper');

var http = require('http'),
    server;

before(function() {
  server = http.createServer(require('../../app'));
  server.listen(0);
  browser.baseUrl = 'http://localhost:' + server.address().port;
});

beforeEach(function() {
  return browser.ignoreSynchronization = true;
});

after(function(){
  server.close();
});

describe('StockTracker CRUD', function(){

  describe('GET /', function(){
    it('should respond with a 200', function(done){
      request(app).get('/').expect(200,done);
    });

    it('displays a header', function(done){
    browser.get('/');
    element(by.tagName('h1')).getText().then(function(text){
      expect(text).to.equal("Welcome to StockTracker");
      done();
      });
    });
  });
});
