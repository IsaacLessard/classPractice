require('../helper')

var http = require('http')
var server;

before(function() {
  server = http.createServer(require('../../app'))
  server.listen(0)
  browser.baseUrl = "http://localhost:3000"
})

beforeEach(function() {
  return browser.ignoreSynchronization = true
})

afterEach(function(){
  server.close()
})

describe('At route /', function() {
  it('returns a homepage with a title', function() {
    browser.get('/')
    element(by.tagName('h1')).getText().then(function(text) {
      expect(text).to.equal('Welcome to Habbo Hotel')
    })
  })
  it('Tells the user how to use navigation', function(){
    browser.get('/')
    element(by.tagName('h3')).getText().then(function(text){
      expect(text).to.equal('Use the navigation above to begin')
    })
  })
  it('Contains navigation links Sign In and Sign Up', function() {
    browser.get('/')
    element.all(by.tagName('a')).getText().then(function(element) {
      expect(element[0]).to.equal('Sign In')
      expect(element[1]).to.equal('Sign Up')
    })
  })
  it('takes user to sign in when link is clicked', function() {
    browser.get('/')
    element.all(by.tagName('a')).then(function(element) {
      element[0].click().then(function() {
        browser.getCurrentUrl().then(function(url){
          expect(url).to.equal("http://localhost:3000/sign-in")
        })
      })

    })
  })
  it('takes user to sign up when link is clicked', function() {
    browser.get('/')
    element.all(by.tagName('a')).then(function(element) {
      element[1].click().then(function() {
        browser.getCurrentUrl().then(function(url){
          expect(url).to.equal("http://localhost:3000/sign-up")
        })
      })

    })
  })
})

describe('At route /sign-up', function() {
  it('shows the registration form to the user', function() {
    browser.get('/sign-up')
    element(by.tagName('legend')).getText().then(function(text) {
      expect(text).to.equal('Registration Form')
    })
  })
  it('should contain the email, password, and password confirmation fields as well as the register button', function() {
    browser.get('/sign-up')
    element.all(by.tagName('input')).getAttribute('name').then(function(element) {
      expect(element[0]).to.equal('email')
      expect(element[1]).to.equal('password')
      expect(element[2]).to.equal('passwordConfirmation')
    })
    element(by.tagName('button')).getAttribute('type').then(function(type) {
      expect(type).to.equal('submit')
    })
  })
})
