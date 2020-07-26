import React, { Component } from 'react';
import { addCandidate } from '../actions/candidateAction'
import userIcon from './userIcon.png'
import {connect} from'react-redux'
import $ from 'jquery'
class Landing extends Component {
  state = {
    fullName: '',
    email: '',
    department: '',
    level: '',
    image:'',
    loading: false
}
handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
}
handleSubmit = e => {
    e.preventDefault()
    const newCandidate = {
        fullName: this.state.fullName,
        email: this.state.email,
        department: this.state.department,
        image: this.state.image,
        level: this.state.level
    }
    this.props.addCandidate(newCandidate)
    this.props.history.push('/')
}
uploadFile=()=>{
  $('#myfile').click()
}
uploadImage=async e =>{
  const files = e.target.files
  const data = new FormData()
  data.append('file', files[0])
  data.append('upload_preset', 'jewbreel')
  this.setState({loading:true})
  const res = await fetch('https://api.cloudinary.com/v1_1/jewbreel1/image/upload',
  {
    method:'POST',
    body:data
  }
  )
  const file = await res.json()
  this.setState({image:file.secure_url})
  this.setState({loading:false})
  console.log(file.secure_url)
}
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
            <div>
              <h1>Register</h1>
              <p>Please fill in this form to create an account.</p>
              <hr/>
              <div className='ml-5'>
              {
                (this.state.image==='')?(
                  <div>
                  <img id="image" src={userIcon} style={{borderRadius:"50%"}} onClick={this.uploadFile}/>
                  <input onChange={this.uploadImage} type="file" id="myfile" name='image' style={{display: "none"}}/>
                  </div>
                  ):(
                    <img id="image" src={this.state.image}  className='mx-auto d-block img-fluid'/>

                )
              }
              
              </div>
              <hr/>
              <label for="name"><b>Full Name</b></label>
              <input className='form-control form-control-plaintext' onChange={this.handleChange} type="text" placeholder="Enter Full Name" name="fullName" id="name" required/>
              <label for="email"><b>Email</b></label>
              <input className='form-control form-control-plaintext' onChange={this.handleChange} type="email" placeholder="Enter Email" name="email" id="email" required/>
          
              <label for="psw"><b>Department</b></label>
              <input className='form-control form-control-plaintext' onChange={this.handleChange} type="text" placeholder="Enter Department" name="department" id="psw" required/>
          
              <label for="psw-repeat"><b>Level</b></label>
              <input className='form-control form-control-plaintext' onChange={this.handleChange} type="text" placeholder="Level" name="level" id="psw-repeat" required/>
              <hr/>
          
              
              <button type="submit" class="btn btn-outline-primary btn-block">Register</button>
            </div>
          
           
          </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
  return {
      candidates: state.candidates
  }
}
export default connect(mapStateToProps, { addCandidate })(Landing);