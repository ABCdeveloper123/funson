// const myfeet = 12;
// const dadifeet = myfeet / 12;
// console.log(dadifeet);



// function inchTofeet(inches) {
//     const feet = inches / 12;
//     return feet;
// }
// const dadai = 144;
// const dadainch = inchTofeet(dadai);
// console.log(dadainch);



// function milestwon(miles) {

//     const kilometer = miles * 1.609;
//     return kilometer;
// }
// const mile = 23;
// const rasta = milestwon(mile);
// console.log(rasta);



function iseven(number) {
    const remainder = number % 2;
    // console.log(remainder);
    if (remainder === 0) {

        return true;
    }
    else {
        return false;
    }
}


// const mynumberiseven = iseven(404);
// console.log(mynumberiseven);
// const hernumber = iseven(501);
// console.log(hernumber);



function isleapyear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;

    }
    else {
        return false;
    }
}
const mysal = isleapyear(1236);
console.log(mysal);
const mysals = isleapyear(1235);
console.log(mysals);
