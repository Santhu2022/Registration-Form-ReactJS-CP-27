import {Component} from 'react'
import './index.css'

const SUCCCESS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/success-icon-img.png'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFirstNameEmpty: false,
    isLastNameEmpty: false,
    isFormSubmitted: false,
  }

  onChangeFirstName = event => this.setState({firstName: event.target.value})

  onChangeLastName = event => this.setState({lastName: event.target.value})

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    this.setState({
      isFirstNameEmpty: !firstName,
      isLastNameEmpty: !lastName,
      isFormSubmitted: firstName && lastName,
    })
  }

  resetForm = () => {
    this.setState({firstName: '', lastName: '', isFormSubmitted: false})
  }

  onBlurFirstNameField = event =>
    this.setState({isFirstNameEmpty: !event.target.value})

  onBlurLastNameField = event =>
    this.setState({isLastNameEmpty: !event.target.value})

  renderForm = () => {
    const {firstName, lastName, isFirstNameEmpty, isLastNameEmpty} = this.state
    const firstNameClassName = isFirstNameEmpty
      ? 'input-field required-style'
      : 'input-field'

    const lastNameClassName = isLastNameEmpty
      ? 'input-field required-style'
      : 'input-field'

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <div className="input-field-container">
          <label htmlFor="Firstname" className="input-label">
            FIRST NAME
          </label>
          <input
            type="text"
            id="Firstname"
            value={firstName}
            className={firstNameClassName}
            placeholder="First Name"
            onChange={this.onChangeFirstName}
            onBlur={this.onBlurFirstNameField}
          />
          {isFirstNameEmpty && <p className="required-message">Required</p>}
        </div>
        <div className="input-field-container">
          <label htmlFor="Lastname" className="input-label">
            LAST NAME
          </label>
          <input
            type="text"
            id="Lastname"
            value={lastName}
            className={lastNameClassName}
            placeholder="Last Name"
            onChange={this.onChangeLastName}
            onBlur={this.onBlurLastNameField}
          />
          {isLastNameEmpty && <p className="required-message">Required</p>}
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    )
  }

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="registration-app-container">
        <h1 className="heading">Registration</h1>
        {!isFormSubmitted ? (
          this.renderForm()
        ) : (
          <div className="submitted-container">
            <img
              src={SUCCCESS_IMAGE}
              alt="success"
              className="submitted-image"
            />
            <p className="submitted-text">Submitted Successfully</p>
            <button
              className="submit-btn "
              type="button"
              onClick={this.resetForm}
            >
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default RegistrationForm
