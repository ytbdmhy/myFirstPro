export function isValidUsername (username) {
  const validMap = ['ytbdmhy', 'susu']
  return validMap.indexOf(username.trim()) >= 0
}
