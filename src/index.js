
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix) {
    matrix = []
  }
  for(let i=0; i<matrix.length; i++) {
    if(matrix[i] == []) {
      return []
    } else if(i%2==1) {
       matrix[i]= matrix[i].reverse();
      //  console.log(matrix[i])
    } else {
       matrix[i]= matrix[i];
      //  console.log(matrix[i])
    }
    // console.log(matrix)
  }
  // console.log(matrix)

  matrix = matrix.toString().split(',')
// console.log(typeof matrix,matrix)
let b = matrix.map(el => +el)
// console.log(typeof b,b)
b.forEach(el => {
  if(el == []) {
     b=[]
  }
})
  return b;
}
