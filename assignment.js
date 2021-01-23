

//problem-1
function kilometerTOMeter(kilometer){
    const meter = kilometer * 1000;
    return meter;
}
const convert =  [2];

const result = kilometerTOMeter(convert[0]);
console.log(result)



//problem-2
function clock(price) {
    var result = price * 10;
    return result;
}
function mobile(price) {
    var result = price * 5;
    return result;
}
function laptop(price) {
    var result = price * 2;
    return result;
}
var clockTotal = clock(15);
var mobileTotal = mobile(100);
var laptopTotal = laptop(500);

function budgetCalculator(clockTotal, mobileTotal, laptopTotal) {
    var total = clockTotal + mobileTotal + laptopTotal;
    return total;
}
var total = budgetCalculator(clockTotal, mobileTotal, laptopTotal);
console.log(total);



//problem-3
function hotelCost(stay) {
    var cost = 0;
    if (stay <= 10) {
        cost = stay * 1000;
    }
    else if (stay <= 20) {
        var firstTenDays = 10 * 1000;
        var remaining = stay - 10;
        var secondTenDays = remaining * 800;
        cost = firstTenDays + secondTenDays;
    }
    else {
        var firstTenDays = 10 * 1000;
        var secondTenDays = 10 * 800;
        var remaining = stay - 20;
        var thirdTenDays = remaining * 600;
        cost = firstTenDays + secondTenDays + thirdTenDays;
    }
    return cost;
}
var totalCost = hotelCost(25);
console.log(totalCost);   



//problem-4
function megaFriend(array) {
    var longestWord = "";

    array.forEach(function (word) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });

    return longestWord;
}

var word = megaFriend(["tipu", "jhonkar", "russell", "obhi", "rashed"]);
console.log(word); 



