import axios from 'axios';

export const getUser = (id) => {
  return axios.get(`/api/users/${id}`)
}

export const watchMovie = (id, data) => {
  return axios.patch(`/api/users/${id}/watch`, data)
}

export const unWatchMovie = (id, data) => {
  return axios.patch(`/api/users/${id}/unwatch`, data)
}

export const getCurUser = (id) => {
  return axios.get(`/api/users/current`)
}