var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, el) {
  var newArr = [el,...arr]
  return newArr
}


function destructivelyAddElementToBeginningOfArray(arr, el) {
  arr.push(el)
  return arr
}

function accessElementInArray(arr,idx) {
  return arr[idx]
}
