function getResult(mass) {
    let days = 0;
    let sum = 0;
    for (numb1 of mass) {
        sum += numb1;
    }
    sredn = sum / mass.length;
    sredn = Math.round(sredn)
    for (numb1 of mass) {
        days += Math.abs(sredn-numb1);
    }
    console.log(days);
}

console.log(getResult([2, 1, 4, 1]))
console.log(getResult([4, 2, 4, 5]))
console.log(getResult([2, 2, 4, 1]))
console.log(getResult([2, 2, 4, 1, 3]));