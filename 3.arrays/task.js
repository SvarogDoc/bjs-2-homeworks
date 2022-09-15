function compareArrays(arr1, arr2) {

  let result = (arr1.length === arr2.length && arr1.every((item, idx) => item === arr2[idx]));;

  return result; // boolean
}

function advancedFilter(arr) {
  
  let resultArr = arr.filter((positive) => positive > 0)
  .filter((multiple) => multiple % 3 === 0)
  .map((multiplied) => multiplied * 10);

  return resultArr; // array
}
