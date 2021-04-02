import validator from 'validator'
import { isEmpty } from './isEmpty' 

const validateLogin = (data: any) => {
  const errors = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid'
  }

  if (!validator.isEmpty(data.email)) {
    errors.email = 'Email is required'
  }

  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must have 6 and 30 chars'
  }

  if (!validator.isEmpty(data.email)) {
    errors.password = 'Password is invalid'
  }

  return {
    errors, 
    isValid: isEmpty(errors)
  }
}