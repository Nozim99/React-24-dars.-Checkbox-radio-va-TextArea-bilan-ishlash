import React from 'react'

export default class Form extends React.Component {
  state = {
    message: '',
    select: '',
    subscription: false,
    gender: ''
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  checkedHendler = (e)=>{
    this.setState({ [e.target.name]: e.target.checked })
  }

  render() {
    const { message, select, subscription, gender } = this.state

    return (
      <div className='form'>
        <h1>Form</h1>        
        <textarea className='input' name="message" value={message} onChange={this.changeHandler} placeholder="Message"></textarea><br />
        <select name="select" value={select} onChange={this.changeHandler}>
          <option disabled></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select><br />
        <label><input type="checkbox" name='subscription' checked={subscription} onChange={this.checkedHendler} />Subscribe</label><br />
        <label className='gender__line'><input type="radio" name="gender" value={"male"} onChange={this.changeHandler} />Male</label>
        <label><input type="radio" name="gender" value={"female"} onChange={this.changeHandler} />Female</label>
      </div>
    )
  }
}