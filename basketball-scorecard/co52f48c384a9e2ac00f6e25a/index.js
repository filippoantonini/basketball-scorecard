let scoreEl = document.getElementById("score")

let count = 0

function add1() {
    count += 1
    scoreEl.innerText = count
}

function add2() {
    count += 2
    scoreEl.innerText = count
}

function add3() {
    count += 3
    scoreEl.innerText = count
}

let scoreElGuest = document.getElementById("scoreGuest")

let countGuest = 0

function add1G() {
    countGuest += 1
    scoreElGuest.innerText = countGuest
}

function add2G() {
    countGuest += 2
    scoreElGuest.innerText = countGuest
}

function add3G() {
    countGuest += 3
    scoreElGuest.innerText = countGuest
}

function newGame() {
    count = 0
    countGuest = 0
    scoreEl.innerText = 0
    scoreElGuest.innerText = 0
}