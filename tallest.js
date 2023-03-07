function maxInArray(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const heights = [167, 190, 120, 165, 137];
const tallest = maxInArray(heights);
console.log(tallest);


// Home Work: write a function to get the lowest  number in an array

function minInArray(numbers){
    let smallest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element < smallest){
            smallest = element;
        }
    }
    return smallest;
}

const widths = [12, 34, 54, 76, 54, 07, 5, 23, 1];
const minWidth = minInArray(widths);
console.log(minWidth);