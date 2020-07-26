import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getCandidates } from '../actions/candidateAction'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
class candidatesList extends Component {
    componentDidMount = () => {
        this.props.getCandidates()
    }
    render() {
        const { candidates } = this.props.candidates
        console.log(candidates)
        const candidatesList = (this.props.candidates.loading===false)?((candidates.length) ? (
            candidates.map(candidate => {
                return (
                        <tr key={candidate._id}>
                        <Link to={'/candidate/'+candidate._id}>
                        <td className='float-left' width='45%'>
                        <img src={candidate.image} alt="" className="img-fluid rounded-circle" width='100px' height='150px'/>
                        </td>
                        <td className='float-right' width='55%'><h4>{candidate.fullName}</h4></td>
                        </Link>
                        </tr>
                )
            })
        ) : (
                <h4 className='text-center'>No candidate registered yet</h4>
            )):(<div className="spinner-border spinner-border-lg"></div>)
        return (
            <div className="row mt-5">
                <div className="col-md-8 m-auto">
                    <div className="card card-body border-left-primary border-bottom-primary">
                    <table className="table-borderless">
                        <tbody>
                        {candidatesList}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        );
    }
}
candidatesList.propTypes = {
    getCandidates:PropTypes.func.isRequired,
    candidates: PropTypes.object.isRequired
};
const mapStateToProps = (state) => {
    return {
        candidates: state.candidates
    }
}
export default connect(mapStateToProps, { getCandidates }) (candidatesList);