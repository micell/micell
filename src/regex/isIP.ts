import isIPv4 from './isIPv4'
import isIPv6 from './isIPv6'

const isIP = (string: string): boolean => isIPv4(string) || isIPv6(string)

export default isIP
