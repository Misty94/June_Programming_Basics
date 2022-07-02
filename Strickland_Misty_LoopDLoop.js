
// We need a loop because we want to repeat a process (giving out candy) until a condition is met (the runner exceeding 6 miles).

// The starting point of the loop is 0 because that's where the runner starts out.

// The loop should stop when (i) reaches 7 because the device will stop giving out candy after mile 6.

// The loop will know to stop because (i) will no longer be less than or equal to 6, so the condition is not met.

// It will be incrementing 1 because the runner runs 1 mile at a time.
// (The % is added to make sure the runner only gets candy every 2 miles and the != is added to make sure the runner doesn't get candy on mile 0.)

// We need varialbe (i) to represent how many miles have been ran.


var i = 0;
while (i <= 6) {
    if (i % 2 == 0 && i != 0) {
        console.log("Candy!")
    }
    i++;
}

console.log("***********************")


// Stretch Feature 1

function RunningForCandy(mile, speed) {
    while (mile <= 6) {
        if (mile % 2 == 0 && mile != 0 && speed >= 5.5) {
            console.log("Candy!")
        }
        else {
            console.log("Keep Running!")
        }
        mile++;
    }
}

RunningForCandy(0, 5.6)


// This only works if the runner is consistent with their speed.