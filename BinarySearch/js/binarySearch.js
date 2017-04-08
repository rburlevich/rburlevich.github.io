function binarySearch(arr, number) {
  var i = -1;
  var low = 0;
  var high = arr.length;
  var mid;
  while (low < high) {
    mid = parseInt((low + high)/2);
    if (number == arr[mid]) {
      i = mid;
      break;
    } else {
      if (number < arr[mid]) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
  }
  return i;
}
