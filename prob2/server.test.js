var request = require('supertest')
var app = require('../server/server')
var expect = require('chai').expect

describe('GET /thoughts', function() {
  it('routes correctly', function(done) {
    request(app).get('/thoughts').expect(200, done)
  })
  it('returns an array of thoughts', function(done) {
    request(app).get('/thoughts').expect(function(res) {
      expect(res.body).to.be.instanceOf(Array)
    }).end(done)
  })
  it('returns an array of actual items', function(done) {
    request(app).get('/thoughts').expect(function(res) {
      expect(res.body[0]).to.equal('my thought')
      expect(res.body[2]).to.equal('nada')
    }).end(done)
  })
})

describe('GET thoughts/:id', function(){
  it('returns an item matching id', function(done){
    request(app).get('/thoughts/1').expect(200,done)
  })
  it('returns the items data', function(done) {
    request(app).get('/thoughts/1').expect(function(res) {
      expect(res.body).to.equal('your thought')
    }).end(done)
  })
})

describe('POST /thoughts', function(){
  it('responds with 200', function(done){
    request(app).post('/thoughts')
    .send({message: 'Thinking about sleeeeeeep'})
    .expect(function(res) {
      expect(res.body).to.exist
      expect(res.body).to.equal('Thinking about sleeeeeeep')
    }).end(done)
  })
})

describe('DELETE /thoughts/:id', function() {
  it('responds with 200', function(done) {
    request(app).delete('/thoughts/2').expect(200).end(done)
  })
  it('removed item from array', function(done) {
    request(app).delete('/thoughts/1').expect(function(res) {
      expect(res.body.indexOf('your thought')).to.equal(-1)
    }).end(done)
  })
})

describe('PUT /thoughts/:id', function(){
  it('responds with 200', function(done){
    request(app).put('/thoughts/0')
    .send({message: 'My thoughts'})
    .expect(function(res) {
      expect(res.body).to.exist
      expect(res.body).to.equal('My thoughts')
    }).end(done)
  })
})
