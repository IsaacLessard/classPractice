var request = require('supertest')
var app = require('../../app')
var Hotel = require('../../models/hotel')

describe('Hotels', function() {
  beforeEach(function(done) {
    Hotel.forge({}).fetchAll().then(function (collection) {
      collection.forEach(function (model) {
        model.destroy()
      })
      done()
    })
  })// before each

  after(function(done) {
    Hotel.forge({}).fetchAll().then(function (collection) {
      collection.forEach(function (model) {
        model.destroy()
      })
      done()
    })
  }) // after

  describe('GET /hotels', function () {
    it('returns a list of hotels in the database', function(done) {
      var hotelAttr = {
        name: 'ThePad',
        address: '2700 N Hayden',
        city: 'Scottsdale',
        state: 'AZ',
        website: 'www.placekitten.com'
      }

      new Hotel(hotelAttr).save().then(function(model) {
        request(app).get('/hotels')
          .end(function (req, res) {
            expect(res.body[0].name).to.equal('ThePad')
            expect(res.body[0].website).to.equal('www.placekitten.com')
            done()
          }) // end
      }) // then
    }) // it
  }) // describe GET /hotels

  describe('POST /hotels', function () {
    it('persists a hotel in the database', function (done) {
      var hotelAttr = {
        name: 'ThePad',
        address: '2700 N Hayden',
        city: 'Scottsdale',
        state: 'AZ',
        website: 'www.placekitten.com'
      }

      request(app).post('/hotels')
        .send(hotelAttr)
        .end(function (req, res) {
          expect(res.body.name).to.equal('ThePad');
          expect(res.body.state).to.equal('AZ');
          Hotel.forge({}).fetchAll().then(function (collection) {
            expect(collection.length).to.equal(1);
            done();
          }); // then
        }); // end
      }); // it
    });//describe POST /hotels
}); // describe
