var Index = React.createClass({
  render: function() {
    return (
      <div>
        <div className="signLinks">
          <a href="/sign-in">Sign In</a>
          <span> | </span>
          <a href="/register">Sign Up</a>
        </div>
        <div className='indexTitle'>
          <h1>Welcome to StockTracker</h1>
          <h3>Use the navigation above to begin</h3>
        </div>
      </div>
    )
  }
})
ReactDOM.render(<Index/>, document.getElementById('entry-point'))
