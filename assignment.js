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
check whether the given file name is javascript file or not
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

/*(3)
Function name : oilPrice
Parameter Count : 3
diesel price 114TK/litre
Petrol price 130TK/litre
Octane price 135Tk/litre
Output : calculate the total oil price that i have  to pay 
*/
function oilPrice(diesel, petrol, octane) {
    const dieselPricePerLitre = 114;
    const petrolPricePerLitre = 130;
    const octanePricePerLitre = 135;
    const dieselPrice = diesel * dieselPricePerLitre;
    const petrolPrice = petrol * petrolPricePerLitre;
    const octanePrice = octane * octanePricePerLitre;
    const totalOilPrice = dieselPrice + petrolPrice + octanePrice;
    return totalOilPrice;
}
let oils = oilPrice(2, 2, 2);
console.log(oils);
