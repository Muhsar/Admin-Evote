import React, { Component } from 'react';
import { connect } from 'react-redux'
import { previewCandidates, addCandidate } from '../actions/candidateAction'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
class Home extends Component {
   
    componentDidMount = () => {
        this.props.previewCandidates()
    }
    render() {
        const { candidates } = this.props.candidates
        console.log(candidates)
        const candidateLength = candidates.length
        const candidatesList = (this.props.candidates.loading===false)?((candidates.length) ? (
            candidates.map(candidate => {
                return (
                        <li key={candidate._id}>
                            <p>{candidate.fullName}</p>
                        </li>
                )
            })
        ) : (
                <h4 className='text-center'>No Candidates registered yet</h4>
            )):(<div className="spinner-border spinner-border-lg"></div>)
        return (
            <React.Fragment>
            <div class="row">

            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-primary text-uppercase mb-1"> Registered Candidates</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">{candidateLength}</div>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Registered Voters</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-info shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks</div>
                      <div class="row no-gutters align-items-center">
                        <div class="col-auto">
                          <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                        </div>
                        <div class="col">
                          <div class="progress progress-sm mr-2">
                            <div class="progress-bar bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Pending Requests</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">18</div>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
          

            <div class="row">
              <div class="col-lg-6 mb-4">
              <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Candidates</h6>
              </div>
              <div class="card-body">
                <ul>{candidatesList}</ul>
                <Link to="/candidates">View All Candidates →</Link>
              </div>
            </div>

          </div>

          <div class="col-lg-6 mb-4">

            

            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Evote App Powered By</h6>
              </div>
              <div class="card-body">
                <p>Amin Ajao &</p>
                <p class="mb-0">Jubril Musa</p>
              </div>
            </div>

          </div>
        </div>
            </React.Fragment>
        );
    }
}
Home.propTypes = {
    previewCandidates: PropTypes.func.isRequired,
    candidates: PropTypes.object.isRequired
};
const mapStateToProps = (state) => {
    return {
        candidates: state.previewCandidates
    }
}
export default connect(mapStateToProps, { previewCandidates, addCandidate })(Home);