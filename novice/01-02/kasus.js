// // mA = [2, 4]
// // mB = [4, 8]

// // function su(mA, mB){
// //     var result = [];
// //     result = new Array(mA.length);
// //     for (var i = 0; i < result.length; i++){
// //         result[i] = new Array(mA[i].length);
// //         for (var j = 0; j < result[i].length; j++){
// //             result[i][j] = mA[i][j] + mB[i][j];
// //         }
// //     }
// //     return result;
// // }

// // console.log(sum);


// function multiply(a, b) {
//     var aNumRows = a.length, aNumCols = a[0].length,
//         bNumRows = b.length, bNumCols = b[0].length,
//         m = new Array(aNumRows);  // initialize array of rows
//     for (var r = 0; r < aNumRows; ++r) {
//       m[r] = new Array(bNumCols); // initialize the current row
//       for (var c = 0; c < bNumCols; ++c) {
//         m[r][c] = 0;             // initialize the current cell
//         for (var i = 0; i < aNumCols; ++i) {
//           m[r][c] += a[r][i] * b[i][c];
//         }
//       }
//     }
//     return m;
//   }
  
//   function display(m) {
//     for (var r = 0; r < m.length; ++r) {
//       console.log('&nbsp;&nbsp;'+m[r].join(' ')+'<br />');
//     }
//   }
  
//   var a = [[8, 3], [2, 4], [3, 6]],
//       b = [[1, 2, 3], [4, 6, 8]];
//   console.log('matrix a:<br />');
//   display(a);
//   console.log('matrix b:<br />');
//   display(b);
//   console.log('a * b =<br />');
//   display(multiply(a, b));

var a =[
    [1,2],
    [3,4]
]

function rr([a,b][c,d]){
    var mA = [a, b]
    var mB = [c, d]
    return add = mA + mB
}

console.log(array);