let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-p")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    saveEl.textContent += count+" - "
}

function resetCount() {
    count = 0
    countEl.textContent = count
}

function resetAll() {
    count = 0
    saveEl.textContent = "Previous count: "
    countEl.textContent = count
}