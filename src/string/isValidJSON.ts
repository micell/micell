export default function isValidJSON(value: any): boolean {
  let isValid = false

  try {
    JSON.parse(value)
    isValid = true
  } catch (err) {
    // Todo: Print a warning message into console
  }

  return isValid
}
