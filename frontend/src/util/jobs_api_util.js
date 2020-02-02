import axios from 'axios';

export const addJob = (data, jobId, userId) => {
  return axios.post(`/api/jobs/${jobId}/${userId}`, data)
}

