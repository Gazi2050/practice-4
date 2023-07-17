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

/*(2)
Function name : isJavaScriptFile
cheak whether the given file name is javascript file or not
*/
function isJavaScriptFile(fileName) {
    if (fileName.includes('.js.')) {
        return 'Please enter a valid file name'
    }
    if (fileName.includes('.js')) {
        return true;
    }
    else {
        return false;
    }
}
let nameOfFile = isJavaScriptFile('app.png');
console.log(nameOfFile);