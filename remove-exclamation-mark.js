// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  const array = s.split('')
  return array.filter(letter => letter != '!').join('')
}

console.log(removeExclamationMarks("Hello World!"))