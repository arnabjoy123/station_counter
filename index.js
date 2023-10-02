let countEl = document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
let count = 0

function increment() {
    count = count + 1
    document.getElementById("count-el").innerText = count
}

function save() {
    let store = count + "-" 
    saveEl.textContent = saveEl.textContent + store 
    countEl.textContent = 0
    count=0
}


