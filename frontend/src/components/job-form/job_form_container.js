import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import {writeJob} from '../../actions/jobs_actions'
import JobForm from './job_form'

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.user,
    errors: state.errors.jobs
  })

}

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  writeJob: (job) => dispatch(writeJob(job))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JobForm));