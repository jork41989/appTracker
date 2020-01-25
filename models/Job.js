const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const JobSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  company: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  outcome: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }

})

module.exports = Job = mongoose.model('job', JobSchema)