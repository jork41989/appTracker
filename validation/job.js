const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validJobInput(data) {
  let errors = {}

  data.company = validText(data.company) ? data.company : '';
  data.title = validText(data.title) ? data.title : '';
  data.outcome = validText(data.outcome) ? data.outcome : '';

  if (Validator.isEmpty(data.company)) {
    errors.company = 'Please enter the name of the company'
  }
  
  if (Validator.isEmpty(data.title)) {
    errors.title = 'Please enter the job title'
  }

  if (Validator.isEmpty(data.outcome)) {
    errors.outcome = 'Please select an outcome'
  }

}