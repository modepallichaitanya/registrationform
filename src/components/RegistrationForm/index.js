import './index.css'
import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    lastNameError: false,
    firstNameError: false,
    isFormSubmitted: false,
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    const isValidFirstName = firstName !== ''

    this.setState({firstNameError: !isValidFirstName})
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    const isValidLastName = lastName !== ''

    this.setState({lastNameError: !isValidLastName})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  submitForm = event => {
    const {firstName, lastName} = this.state
    event.preventDefault()
    const isValidFirstName = firstName !== ''
    const isValidLastName = lastName !== ''

    if (isValidFirstName && isValidLastName) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        firstNameError: !isValidFirstName,
        lastNameError: !isValidLastName,
        isFormSubmitted: false,
      })
    }
  }

  renderFormContainer = () => {
    const {lastNameError, firstNameError, lastName, firstName} = this.state
    const lastError = lastNameError ? 'error-field' : ''
    const firstError = firstNameError ? 'error-field' : ''
    return (
      <form className="form-container" onSubmit={this.submitForm}>
        <div className="input-element">
          <label className="label-text" htmlFor="first_name">
            FIRST NAME
          </label>
          <input
            type="text"
            value={firstName}
            className={`user-input ${firstError}`}
            id="first_name"
            placeholder="First Name"
            onChange={this.onChangeFirstName}
            onBlur={this.onBlurFirstName}
          />
        </div>
        {firstNameError && <p className="error-message">Required</p>}
        <div className="input-element">
          <label className="label-text" htmlFor="last_name">
            LAST NAME
          </label>
          <input
            type="text"
            value={lastName}
            className={`user-input ${lastError}`}
            id="last_name"
            placeholder="Last Name"
            onChange={this.onChangeLastName}
            onBlur={this.onBlurLastName}
          />
        </div>
        {lastNameError && <p className="error-message">Required</p>}
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    )
  }

  renderSuccessContainer = () => (
    <div className="success-container">
      <img
        className="success-image"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success-logo"
      />
      <p className="success-heading">Submitted Successfully</p>
      <button className="resubmit" type="button" onClick={this.onClickResubmit}>
        Submit Another Response
      </button>
    </div>
  )

  onClickResubmit = () =>
    this.setState({isFormSubmitted: false, firstName: '', lastName: ''})

  render() {
    const {
      firstName,
      lastName,
      firstNameError,
      lastNameError,
      isFormSubmitted,
    } = this.state
    console.log(
      firstName,
      lastName,
      firstNameError,
      lastNameError,
      isFormSubmitted,
    )
    return (
      <div className="app-container">
        <h1 className="heading">Registration</h1>
        <div className="box-container">
          {isFormSubmitted
            ? this.renderSuccessContainer()
            : this.renderFormContainer()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
