var request = require('supertest')
var app = require('../../app')
var User = require('../../models/user')

describe('Users', function () {
  beforeEach(function(done) {
    User.forge({}).fetchAll().then(function (collection) {
      collection.forEach(function (model) {
        model.destroy()
      })
      done()
    })
  })

  after(function (done) {
    User.forge({}).fetchAll().then(function (collection) {
      collection.forEach(function (model) {
        model.destroy()
      })
      done()
    })
  })

  describe('GET /users', function () {
    it('returns list of users in database', function (done) {
      var userAttr = {
        email: 'info@example.com',
        password: 'password'
      }

      new User(userAttr).save().then(function (model) {
        request(app).get('/users')
        .end(function (req, res) {
          expect(res.body[0].email).to.equal('info@example.com')
          expect(res.body[0].password).to.equal('password')
          done()
        })
      })
    })
  })

  describe('POST /users', function(){
    it('persists a user  in the database', function(done){
      var userAttr = {
        email: 'info@example.com',
        password: 'passwor1',
        confirmPass: 'passwor1'
      }

      request(app).post('/users')
        .send(userAttr)
        .end(function(req, res){
          expect(res.body.email).to.equal(userAttr.email)
          expect(res.body.password).to.equal(userAttr.password)
          User.forge({}).fetchAll().then(function(collection){
            expect(collection.length).to.equal(1)
            done()
          })
        })
    })
  })

}) // describe Users
