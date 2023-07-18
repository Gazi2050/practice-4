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

/*(4)
Function name : publicBusFare;
people :117
Bus capacity : 50; (Bus :2)
Micro capacity : 11; (Micro :1)
Public bus price : 250;
Output : total public bus cost ;
*/
function publicBusFare(people) {
    const publicBusPrice = 250;
    let afterBus = people - 100;
    let MicroPeople = afterBus - 11;
    let totalPublicBusPrice = publicBusPrice * MicroPeople;
    return totalPublicBusPrice;
}
let totalPublicBusCost = publicBusFare(117);
console.log(totalPublicBusCost);

/*(5)
Function name : isBestFriend;
Output : check both are their best friends?
*/
let profile1 = {
    name: 'rock',
    friend: 'Jhon'
}
let profile2 = {
    name: 'Jhon',
    friend: 'rock'
}
function isBestFriend(friend1, friend2) {
    if (typeof friend1.name !== 'string' || typeof friend1.friend !== 'string' || typeof friend2.name !== 'string' || typeof friend2.friend !== 'string') {
        return "Please enter a name"
    }
    if (friend1.name === friend2.friend && friend1.friend === friend2.name) {
        return true;
    }
    else {
        return false;
    }
}
let BestFriends = isBestFriend(profile1, profile2);
console.log(BestFriends);

//////////////////////////////END/////////////////////////////////////