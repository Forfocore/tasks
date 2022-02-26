function getResult(mass) {
    let sum = 0;
    for (numb of mass) {
        sum+=numb;
    }
    return sum;
}

console.log(getResult([1,3,5]))
console.log(getResult([-4, 27, -5]))
console.log(getResult([-3, -8, -17]))