const arr = [3,1,5,9,1,3]
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//create a function called `map`, it should take 2 parameters `array` and `iteratee`
//`array` must be an array
//`iteratee` must be a function that takes one parameter and returns a bool
//The point of the javascript map function is to take an array and return different array with the exact same number of items in it
//The items will be whatever the function `iteratee` creates
//in the map function create a new empty array and store in a variable named whatever you want (myNewArray)
//loop array and extract the single item from the array per loop and store it in a variable
//on each loop call iteratee() passing in the item from the current loop into the call to iteratee()
//iteratee is a function that must return something, capture whatever it returns in a variable
//add the returned value from iteratee tp myNewArray
//after looping, return  myNewArray
const map=(array, iteratee)=>{
  const mappedArr = []
  for (let i = 0; i < array.length; i++) {
    mappedArr.push(iteratee(array[i]))
  }
  return mappedArr
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//create a function called `filter`, it should take 2 parameters `array` and `iteratee`
//`array` must be an array
//`iteratee` must be a function that takes one parameter and returns a bool
//in the map function create a new empty array and store in a variable named whatever you want (myNewArray)
//loop `array` and call iteratee for each thing in the array, 
//     passing in the item from the current loop
//iteratee will return true or false, if true add the item to myNewArray else do not
//after looping, return myNewArray
const filter=(array, iteratee)=>{
  const filterArr = []
  for (let i = 0; i < array.length; i++) {
    iteratee(array[i]) ? filterArr.push(array[i]) : ''
  }
  return filterArr
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//create a function called `find`, it should take 2 parameters `theArray` and `fnc`
//loop theArray and call the fnc for each thing in the array, 
//     passing in the item from the current loop
//fnc will return true or false, if true return the item 
//after looping, return null
const find=(theArray, fnc)=>{
  for (let i = 0; i < theArray.length; i++) {
    if (fnc(theArray[i])){
      return theArray[i]
    }
  }
}

//return the last item in theArray
const findLast=(theArray)=>{
  for (let i = 0; i < theArray.length; i++) {
    if (i + 1 === theArray.length){
      return theArray[i]
    }
  }
}

//return the first element of the array
const head=(theArray)=>{
  return theArray[0]
}

//create a new array
//loop theArray in reverse order
//add the item from each loop to the new array
//return the new array
const reverse=(theArray)=>{
  const newArr = []
  for (let i = theArray.length - 1; i > -1; i--) {
    newArr.push(theArray[i])
  }
  return newArr
}

//create a new array
//loop theArray
//add the item from each loop to the new array except the first item
//return the new array
const tail=(theArray)=>{
  const newArr = []
  for (let i = 1; i < theArray.length; i++) {
    newArr.push(theArray[i])        
  }
  return newArr
}



//implement the most basic sorting algorithm there is
//assume the array will always have numbers
//use a while loop to constantly loop theArray until it is sorted
//use a for loop to loop theArray
//look at the current item and the next item, compare them
//if the items are out of order, swap them
//initialize a variable that indicates if a swap had to be done, set it to false
//if a swap is done set it to true
//after each for loop check the variable, if true, continue the while loop
//if false return theArray
const sort=(theArray)=>{
  let sorted = false
  while (!sorted){
    for (let i = 0; i < theArray.length; i++) {
      // set x to the parent's initializer to reset where we are in the array
      for (let x = i; x < theArray.length; x++) {
        if (theArray[i] > theArray[x]){
          const temp = theArray[i]
          theArray[i] = theArray[x]
          theArray[x] = temp
          sorted = true
        }
      }
    }
  }
  return theArray
}

exports.map = map;
exports.filter = filter;
exports.find = find;
exports.head = head;
exports.reverse = reverse;
exports.tail = tail;
exports.sort = sort;
exports.findLast = findLast;

