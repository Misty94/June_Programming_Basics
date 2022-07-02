
// My for loop will traverse through an array and print each number.

var arr1 = [8, 6, 7, 5, 3, 0, 9]
for(var i = 0; i < arr1.length; i++){
    console.log(arr1[i])
}

console.log("*************")

// My for loop will traverse through an array and print the SUM of the number and the index of the number in the array.

var arr2 = [4, 7, 13, 13, 19, 37, -2]
var sum = 0
for(var i = 0; i < arr2.length; i++){
    sum = sum + arr2[i]
    console.log(sum)
    console.log(i)
}

console.log("*************")

// My for loop will traverse through an array and print ONLY the numbers greater than 5.

var arr3 = [6, 2, 12, 14, -24, 5, 0]
for(var i = 0; i < arr3.length; i++){
    if(arr3[i] > 5){
        console.log(arr3[i])
    }
}

console.log("*************")

// NINJA BONUS: Any numbers in the array that are NOT greater than 5 will be replaced with a string of "No Dice", but that string will NOT be printed.

var arr3 = [6, 2, 12, 14, -24, 5, 0]
for(var i = 0; i < arr3.length; i++){
    if(arr3[i] > 5){
        console.log(arr3[i])
    }
    else {
        arr3[i] = "No Dice"
    }
}
