import React, { Component } from 'react';
import {connect} from 'react-redux'
import {candidateDetail} from '../actions/candidateAction'
import PropTypes from 'prop-types'
class Candidate extends Component {
UNSAFE_componentWillMount=()=>{
	this.props.candidateDetail(this.props.match.params.id)
}
	render() { 
		const {candidate} = this.props.candidate
		return ( 
			<div class="row">
                    <div class="col-sm-6 col-md-4">
                        <img src={candidate.image} alt="" class="img-rounded img-responsive img-fluid img-thumbnail" />
                    </div>
                    <div class="col-sm-6 col-md-8">
                        <h4>
                            {candidate.name}</h4>
                        
                        <p>
                            <i class="glyphicon glyphicon-user"></i>{candidate.fullName}
                            <br />
                            <i class="glyphicon glyphicon-envelope"></i>{candidate.email}
                            <br />
                            <i class="glyphicon glyphicon-building"></i>{candidate.department}
                            <br />
                            <i class="glyphicon glyphicon-list"></i>{candidate.level}</p>
                       
                    </div>
                </div>
		 );
	}
}
 Candidate.propTypes = {
	 candidateDetail: PropTypes.func.isRequired,
	 candidate:PropTypes.object.isRequired
 };
 const mapStateToProps = (state) => {
	 return {
		candidate:state.candidate
	 }
 }
export default connect(mapStateToProps, {candidateDetail})(Candidate);