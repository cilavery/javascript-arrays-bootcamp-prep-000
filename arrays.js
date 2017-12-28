var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, el) {
  var newArr = [el,...arr]
  return newArr
}


function destructivelyAddElementToBeginningOfArray(el, arr) {
  arr.push(el)
  return arr
}

function accessElementInArray(arr,idx) {
  return arr[idx]
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr
}

function removeElementFromBeginningOfArray(arr) {
  var newArr = arr.slice(1)
  return newArr
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0,arr.length-1)
}
