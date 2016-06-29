var RegistrationForm = React.createClass({
  getInitialState: function () {
    return {
      checkPassword: <span></span>,
      formValidation: <span>Please complete all fields</span>
    }
  },
  changeUrl: function () {
    location.href = '/success';
  },
  passwordConfirm: function () {
    console.log('checking',this.refs.originalPassword.value," with ",this.refs.retypePassword.value)
    if (this.refs.originalPassword.value == this.refs.retypePassword.value) {
      this.setState({
        checkPassword : <span className="passMatch">Passwords Match!</span>,
        formValidation: <button type="submit">Register</button>

    })
    } else {
      this.setState({
        checkPassword : <span className="passFail">Passwords do not match...</span>,
      })
    }
  },
  render: function(){
    return (
      <div>
        <form method="POST" action="/users" onSuccess={this.changeUrl}>
          <fieldset>
            <legend>Registration Form</legend>
            <label for="email"> Email </label>
            <input type="email" name="email" validations="isEmail" validationError="This is not a valid email" required/>
            <br/>
            <label for="password"> Password </label>
            <input type="password" name="password" ref="originalPassword" required/>
            <br/>
            {this.state.checkPassword}
            <br/>
            <label for="passwordConfirmation"> Password Confirmation </label>
            <input type="password" name="passwordConfirmation" ref="retypePassword" onChange={this.passwordConfirm}required/>
            <br/>
            {this.state.formValidation}
          </fieldset>
        </form>
      </div>
    )
  }

})

ReactDOM.render(<RegistrationForm/>, document.getElementById('register_page'))
