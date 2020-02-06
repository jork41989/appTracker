import * as JobsApiUtil from '../util/jobs_api_util'

export const RECEIVE_JOB = "RECEIVE_JOB";
export const RECEIVE_JOB_ERRORS = "RECEIVE_JOB_ERRORS";

const receiveJob = job => {
  return ({
    type: RECEIVE_JOB,
    job
  })
}

const receiveJobErrors = errors => ({
  type: RECEIVE_JOB_ERRORS,
  errors
});

export const writeJob = (job, jobId, userId) => dispatch => {
  return JobsApiUtil.addJob(job, jobId, userId)
    .then(job => dispatch(receiveJob(job.data)),
      err => dispatch(receiveJobErrors(err.response.data)))
}