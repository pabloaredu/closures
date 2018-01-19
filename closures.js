function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var i = 0;

  return function(){
    i += 1
    return list[i-1];
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6




// var add = (function() {
//   var i = 1;
//   return function(){
//     return (i+=1);

//   };
// })();
// //var t = test();
// console.log(add());
// console.log(add());
// console.log(add());