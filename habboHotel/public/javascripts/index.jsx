var LandingPage = React.createClass({
  render: function() {
    return (
      <div>
        <div className="landingLinks">
          <a href="/sign-in">Sign In</a>
          <span> | </span>
          <a href="/sign-up">Sign Up</a>
        </div>
        <div className="jumbo">
          <h1>Welcome to Habbo Hotel</h1>
          <h3>Use the navigation above to begin</h3>
        </div>
      </div>
    )
  }

})
ReactDOM.render(<LandingPage/>, document.getElementById('entry-point'))
