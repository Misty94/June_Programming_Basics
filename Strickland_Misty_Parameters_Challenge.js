
// All level functions have slightly different names so all variations can run.

// Level 1

function greetSomeone(name) {
    console.log("Good day, " + name + "!")
}

greetSomeone("Anakin")

console.log("************************")

// Level 2

function GreetSomeone(name, time) {
    console.log("Good " + time + ", " + name + "!")
}

GreetSomeone("Padme", "afternoon")


console.log("************************")

// Level 3

function greetPeople(name, time) {
    if (name == "Count Dooku") {
        console.log("I'm coming for you, Dooku!")
    }
    else {
        console.log("Good " + time + ", " + name + "!")
    }
}

greetPeople("Yoda", "evening")
greetPeople("Count Dooku", "morning")