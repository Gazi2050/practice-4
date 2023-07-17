//Assignment-JavaScript//

/*(1)
Function name : radianToDegree
input parameter : radian
Output : degree
*/
function radianToDegree(radian) {
    let degree = radian * (180 / Math.PI);
    return degree;
}
let radian = 10;
let result = radianToDegree(radian)
result = result.toFixed(2)
result = parseFloat(result)
console.log(result)