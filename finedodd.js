// function getsun(number) {
//     let sum = 0
//     for (let i = 0; i < number.length; i++) {
//         const index = i;
//         const element = number[index];
//         sum = sum + element;
//         console.log(index, element, sum);
//     }
//     return sum;

// }
// const mynumber = [12, 23, 34, 45, 56, 67, 78, 89, 80];
// getsun(mynumber);




function getodd(number) {
    const oddnumber = [];
    // let sum = 0
    for (let i = 0; i < number.length; i++) {
        const index = i;
        const element = number[index];
        // sum = sum + element;
        if (element % 2 === 1) {
            console.log(index, element);
            oddnumber.push(element);
        }
    }
    return oddnumber;

}
const mynumber = [12, 23, 34, 45, 56, 67, 78, 89, 80];
const oddnumber = getodd(mynumber);
console.log(oddnumber);
const oddnumberSum = getSumofAnArray(oddnumber);
console.log('odd number', oddnumberSum);

