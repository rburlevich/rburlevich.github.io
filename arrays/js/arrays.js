function isArray1(a) {
  return (a instanceof Array);
}

function isArray2(a) {
  return Array.prototype.isPrototypeOf(a);
}

function range(a, b, c) {
  if (a != undefined) {
    var l = a;
    var index = 1;
    var array = new Array();
    if (b != undefined && c == undefined) {
      l = b - a;
      index = 2;
    } else if (b != undefined && c != undefined) {
      l = (b - a) / c;
      index = 3;
    }
    for (var i = 0; i < l; i++) {
      array[i] = f(i);
    }
    return array;
  }

  function f(x) {
    if(index == 1) {
      return x;
    } else if(index == 2) {
      return x + a;
    } else if(index == 3) {
      return x * c + a;
    }
  }
}

function compact1(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] != true) {
      arr[i] = true;
    }
  }
  return arr;
}

function compact2(arr) {
  var result = arr.map(function(a) {
    return true;
  });
  return result;
}

function sum1(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function sum2(arr) {
  var result = arr.reduce(function(sum, value) {
    return sum + value;
  });
  return result;
}

function unique(arr) {
  function numberElementsInArray(v) {
    var number = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == v) {
        number++;
      }
    }
    return number;
  }
  var uniqueArr = arr.filter(function(value) {
    return (numberElementsInArray(value) == 1) ? true : false;
  });
  return uniqueArr;
}

function last(arr) {
  return arr[arr.length - 1];
}

function excludeLast(arr, n) {
  if (n == undefined) {
    n = 1;
  }
  arr.splice(arr.length - n, n);
  return arr;
}
