const jim = 69;
const dela = 97;
const chinku = 99;

/* if(jim > dela && jim > chinku){
    console.log('Jim will get the cake');
}
else if(dela > jim && dela > chinku){
    console.log('Dela will get the cake');
}
else {
    console.log('chinku will get the cake');
} */


// HomeWork: 1
// write a function that will take 3 numbers will return the max number
// write a function that will take 3 parameters and will the min number

// first  time do it using if-else
// second time do it using Math.min or Math.max

function getMax(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        const number = 'Max Number is: ' + num1;
        return number;
    }
    else if(num2 > num1 && num2 > num3){
        const number = 'Max Number is: ' + num2;
        return number;
    }
    else{
        const number = 'Max Number is: ' + num3;
        return number;
    }
}

function getMin(num1, num2, num3){
    if(num1 < num2 && num1 < num3){
        return num1;
    }
    else if(num2 < num1 && num2 < num3){
        return num2;
    }
    else {
        return num3;
    }
}

function getMaxMath(num1, num2, num3){
    const max = Math.max(num1, num2, num3);
    return max;
}

function getMinMath(num1, num2, num3){
    const min = Math.min(num1, num2, num3);
    return min;
}

const jimNumber = 20;
const delaNumber = 17;
const chinkuNumber = 15;
const maxNumber = getMinMath(jimNumber, delaNumber, chinkuNumber);
console.log(maxNumber);