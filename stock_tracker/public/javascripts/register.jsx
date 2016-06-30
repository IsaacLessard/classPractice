var Register = React.createClass({
  propTypes: {
    // value: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
        <div>
          <form method='POST' action='/'>
            <input type='email' placeholder="example@email.com" required/>
            <br/>
            <input type='password' placeholder="Password" />
            <br/>
            <input type='password' placeholder="Confirm PAssword" />
            <br/>
            <input type='submit' value="Submit"/>
          </form>
        </div>
    )
  },
});

ReactDOM.render(<Register/>, document.getElementById('register_page'))
