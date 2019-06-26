import isString from '../lang/isString'
import reEmail from './email'

const isEmail = string => isString(string) && reEmail.test(string)

export default isEmail
